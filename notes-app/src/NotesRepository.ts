import { Note } from './Note';
import * as fs from 'fs';
import * as path from 'path';

export class NotesRepository {
  private filePath: string;

  constructor(filePath: string = path.join(__dirname, '../notes.json')) {
    this.filePath = filePath;
  }

  load(): Note[] {
    if (!fs.existsSync(this.filePath)) {
      return [];
    }
    const data = fs.readFileSync(this.filePath, 'utf-8');
    if (data.trim().length === 0) {
      return [];
    }
    try {
      const notesData = JSON.parse(data);
      if (!Array.isArray(notesData)) {
        return [];
      }
      return notesData.map((n: any) => new Note(n.id, n.title, n.content, n.tags));
    } catch (error) {
      console.error('Error loading notes, resetting to empty:', (error as Error).message);
      return [];
    }
  }

  save(notes: Note[]): void {
    const data = JSON.stringify(notes.map(n => n.toJSON()), null, 2);
    fs.writeFileSync(this.filePath, data);
  }
}
