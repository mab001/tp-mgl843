import { Router, Request, Response } from 'express';
import { NotesManager } from './NotesManager';
import { NoteValidator } from './NoteValidator';

export class ApiRoutes {
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
        this.router.get('/api/notes', this.apiGetNotes.bind(this));
        this.router.post('/api/notes', this.apiCreateNote.bind(this));
        this.router.get('/api/search', this.apiSearchNotes.bind(this));
        this.router.get('/api/export', this.apiExportNotes.bind(this));
    }

    getRouter(): Router {
    return this.router;
  }

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