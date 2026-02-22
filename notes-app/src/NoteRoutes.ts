import { Router, Request, Response } from 'express';
import { NotesManager } from './NotesManager';
import { NoteValidator } from './NoteValidator';

export class NoteRoutes {
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
    this.router.post('/notes/:id/delete', this.deleteNote.bind(this));
    this.router.get('/search', this.searchNotes.bind(this));
    this.router.get('/export', this.exportNotes.bind(this));

    // API JSON endpoints (keep backward compatibility)
    this.router.get('/api/notes', this.apiGetNotes.bind(this));
    this.router.post('/api/notes', this.apiCreateNote.bind(this));
    this.router.get('/api/search', this.apiSearchNotes.bind(this));
    this.router.get('/api/export', this.apiExportNotes.bind(this));
  }

  getRouter(): Router {
    return this.router;
  }

  // --- Pug UI Routes ---

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

  // --- JSON API Routes (backward compatibility) ---

  private apiGetNotes(req: Request, res: Response): void {
    res.json(this.manager.getNotes());
  }

  private apiCreateNote(req: Request, res: Response): void {
    const { title, content, tags } = req.body;
    const validation = this.validator.validateNoteInput(title, content, tags || []);

    if (!validation.isValid) {
      res.status(400).json({ errors: validation.errors });
      return;
    }

    const note = this.manager.createNote(title, content, tags);
    res.status(201).json(note);
  }

  private apiSearchNotes(req: Request, res: Response): void {
    const query = (req.query.q as string) || '';
    res.json(this.manager.searchNotes(query));
  }

  private apiExportNotes(req: Request, res: Response): void {
    res.type('json').send(this.manager.exportNotes());
  }
}
