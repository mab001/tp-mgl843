import { Note } from './Note';
import * as fs from 'fs';
import * as path from 'path';

export class NotesManager {
  private notes: Note[] = [];
  private filePath: string = path.join(__dirname, '../notes.json');

  constructor() {
    this.loadNotes();
  }

  private loadNotes(): void {
    if (fs.existsSync(this.filePath)) {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      const notesData = JSON.parse(data);
      this.notes = notesData.map((n: any) => new Note(n.id, n.title, n.content, n.tags));
    }
  }

  private saveNotes(): void {
    const data = JSON.stringify(this.notes.map(n => n.toJSON()), null, 2);
    fs.writeFileSync(this.filePath, data);
  }

  createNote(title: string, content: string, tags: string[] = []): Note {
    const id = require('uuid').v4();
    const note = new Note(id, title, content, tags);
    this.notes.push(note);
    this.saveNotes();
    return note;
  }

  getNotes(): Note[] {
    return this.notes;
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