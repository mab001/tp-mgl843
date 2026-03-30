import { Router } from 'express';
import { NotesManager } from './NotesManager';
import { NoteValidator } from './NoteValidator';
import { NoteUIRoutes } from './NoteUIRoutes';
import { NoteApiRoutes } from './NoteApiRoutes';

/**
 * NoteRoutes composes NoteUIRoutes (Pug/HTML) and NoteApiRoutes (JSON API)
 * into a single router, preserving the original public interface.
 */
export class NoteRoutes {
  private router: Router;

  constructor(manager: NotesManager) {
    this.router = Router();
    const validator = new NoteValidator();

    const uiRoutes = new NoteUIRoutes(manager, validator);
    const apiRoutes = new NoteApiRoutes(manager, validator);

    this.router.use(uiRoutes.getRouter());
    this.router.use(apiRoutes.getRouter());
  }

  getRouter(): Router {
    return this.router;
  }
}
