import { Note } from './Note';
import { NotesRepository } from './NotesRepository';


export class NotesManager {
  
  private notes: Note[] = [];

  constructor() {
    NotesRepository.getInstance().loadNotes();
  }

  updateNote(id: string, title: string, content: string, tags: string[]): boolean {
    const note = this.notes.find(n => n.id === id);
    if (!note) return false;
    note.title = title;
    note.content = content;
    note.tags = tags;
    NotesRepository.getInstance().saveNotes();
    return true;
  }

  createNote(title: string, content: string, tags: string[] = []): Note {
    const id = require('uuid').v4();
    const note = new Note(id, title, content, tags);
    this.notes.push(note);
    NotesRepository.getInstance().saveNotes();
    return note;
  }

  getNotes(): Note[] {
    return this.notes;
  }

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex(note => note.id === id);
    if (index === -1) {
      return false;
    }
    this.notes.splice(index, 1);
    NotesRepository.getInstance().saveNotes();
    return true;
  }

  searchNotes(query: string): Note[] {
    return this.notes.filter(note =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.content.toLowerCase().includes(query.toLowerCase()) ||
      note.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
  }

  exportNotes(): string {
    return JSON.stringify(this.notes.map(n => n.toJSON()), null, 2);
  }
}