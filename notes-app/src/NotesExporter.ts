import { Note } from './Note';

export class NotesExporter {
  export(notes: Note[]): string {
    return JSON.stringify(notes.map(n => n.toJSON()), null, 2);
  }
}
