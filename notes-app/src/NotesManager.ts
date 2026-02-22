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
      if (data.trim().length === 0) {
        this.notes = [];
        return;
      }
      try {
        const notesData = JSON.parse(data);
        if (!Array.isArray(notesData)) {
          this.notes = [];
          return;
        }
        this.notes = notesData.map((n: any) => new Note(n.id, n.title, n.content, n.tags));
      } catch (error) {
        console.error('Error loading notes, resetting to empty:', (error as Error).message);
        this.notes = [];
      }
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

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex(note => note.id === id);
    if (index === -1) {
      return false;
    }
    this.notes.splice(index, 1);
    this.saveNotes();
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