import { Note } from './Note';
import { v4 as uuidv4 } from 'uuid';
import { NotesRepository } from './NotesRepository';
import { NotesSearcher } from './NotesSearcher';
import { NotesExporter } from './NotesExporter';

export class NotesManager {
  private notes: Note[] = [];
  private repository: NotesRepository;
  private searcher: NotesSearcher;
  private exporter: NotesExporter;

  constructor() {
    this.repository = new NotesRepository();
    this.searcher = new NotesSearcher();
    this.exporter = new NotesExporter();
    this.notes = this.repository.load();
  }

  createNote(title: string, content: string, tags: string[] = []): Note {
    const note = new Note(uuidv4(), title, content, tags);
    this.notes.push(note);
    this.repository.save(this.notes);
    return note;
  }

  getNotes(): Note[] {
    return this.notes;
  }

  updateNote(id: string, title: string, content: string, tags: string[]): boolean {
    const note = this.notes.find(n => n.id === id);
    if (!note) return false;
    note.title = title;
    note.content = content;
    note.tags = tags;
    this.repository.save(this.notes);
    return true;
  }

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex(note => note.id === id);
    if (index === -1) {
      return false;
    }
    this.notes.splice(index, 1);
    this.repository.save(this.notes);
    return true;
  }

  searchNotes(query: string): Note[] {
    return this.searcher.search(this.notes, query);
  }

  exportNotes(): string {
    return this.exporter.export(this.notes);
  }
}