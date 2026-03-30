import { Router, Request, Response } from 'express';
import { NotesManager } from './NotesManager';
import { NoteValidator } from './NoteValidator';

export class UiRoutes {
    private router: Router;
    private manager: NotesManager;
    private validator: NoteValidator;
    
    constructor(manager: NotesManager) {
        this.router = Router();
        this.manager = manager;
        this.validator = new NoteValidator();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.get('/', this.renderHome.bind(this));
        this.router.post('/notes', this.createNote.bind(this));
        this.router.get('/notes/:id/edit', this.renderEditNote.bind(this));
        this.router.post('/notes/:id/edit', this.updateNote.bind(this));
        this.router.post('/notes/:id/delete', this.deleteNote.bind(this));
        this.router.get('/search', this.searchNotes.bind(this));
        this.router.get('/export', this.exportNotes.bind(this));
    }

    getRouter(): Router {
    return this.router;
  }

    private renderHome(req: Request, res: Response): void {
        const notes = this.manager.getNotes();
        res.render('index', { notes, query: '', message: null, messageType: null });
    }

    private createNote(req: Request, res: Response): void {
        const title = this.validator.sanitizeString(req.body.title);
        const content = this.validator.sanitizeString(req.body.content);
        const tags = this.validator.parseTags(req.body.tags || '');

        const validation = this.validator.validateNoteInput(title, content, tags);

        if (!validation.isValid) {
        const notes = this.manager.getNotes();
        res.render('index', {
            notes,
            query: '',
            message: validation.errors.join(' '),
            messageType: 'error'
        });
        return;
        }

        this.manager.createNote(title, content, tags);
        const notes = this.manager.getNotes();
        res.render('index', {
        notes,
        query: '',
        message: 'Note ajoutee avec succes.',
        messageType: 'success'
        });
    }

    private deleteNote(req: Request, res: Response): void {
        const id = req.params.id;
        const deleted = this.manager.deleteNote(id);
        const notes = this.manager.getNotes();

        if (deleted) {
        res.render('index', {
            notes,
            query: '',
            message: 'Note supprimee.',
            messageType: 'success'
        });
        } else {
        res.render('index', {
            notes,
            query: '',
            message: 'Note introuvable.',
            messageType: 'error'
        });
        }
    }

    private renderEditNote(req: Request, res: Response): void {
    const id = req.params.id;
    const note = this.manager.getNotes().find(n => n.id === id);
    if (!note) {
        res.render('index', {
        notes: this.manager.getNotes(),
        query: '',
        message: 'Note introuvable.',
        messageType: 'error'
        });
        return;
    }
    res.render('edit', { note });
    }

    private updateNote(req: Request, res: Response): void {
    const id = req.params.id;
    const title = this.validator.sanitizeString(req.body.title);
    const content = this.validator.sanitizeString(req.body.content);
    const tags = this.validator.parseTags(req.body.tags || '');
    const validation = this.validator.validateNoteInput(title, content, tags);
    if (!validation.isValid) {
        res.render('edit', {
        note: { id, title, content, tags },
        message: validation.errors.join(' '),
        messageType: 'error'
        });
        return;
    }
    const updated = this.manager.updateNote(id, title, content, tags);
    const notes = this.manager.getNotes();
    if (updated) {
        res.render('index', {
        notes,
        query: '',
        message: 'Note modifiée avec succès.',
        messageType: 'success'
        });
    } else {
        res.render('index', {
        notes,
        query: '',
        message: 'Note introuvable.',
        messageType: 'error'
        });
        }
    }

    private searchNotes(req: Request, res: Response): void {
        const query = (req.query.q as string) || '';
        const notes = query ? this.manager.searchNotes(query) : this.manager.getNotes();
        res.render('index', { notes, query, message: null, messageType: null });
    }

    private exportNotes(req: Request, res: Response): void {
        const data = this.manager.exportNotes();
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Disposition', 'attachment; filename="notes.json"');
        res.send(data);
    }
}