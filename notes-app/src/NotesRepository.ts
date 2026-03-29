  import { Note } from './Note';
  import * as fs from 'fs';
  import * as path from 'path';

  export class NotesRepository {
    private static instance: NotesRepository;
    private notes: Note[] = [];
    private filePath: string = path.join(__dirname, '../notes.json');

    public static getInstance(): NotesRepository {
      if (!NotesRepository.instance) {
        NotesRepository.instance = new NotesRepository();
      }
      return NotesRepository.instance;
    }

    private constructor() {}

    public loadNotes(): void {
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

    public saveNotes(): void {
    const data = JSON.stringify(this.notes.map(n => n.toJSON()), null, 2);
    fs.writeFileSync(this.filePath, data);
  }
}