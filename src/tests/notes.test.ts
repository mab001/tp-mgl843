import { NotesManager } from '../NotesManager';
import * as fs from 'fs';
import * as path from 'path';

describe('Notes App Functional Tests', () => {
  let manager: NotesManager;

  beforeEach(() => {
    // Clear persisted notes
    const filePath = path.join(__dirname, '../../notes.json');
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
    manager = new NotesManager();
  });

  test('Create a note', () => {
    const note = manager.createNote('Test Title', 'Test Content', ['tag1']);
    expect(note.title).toBe('Test Title');
    expect(note.tags).toContain('tag1');
  });

  test('List notes', () => {
    manager.createNote('Note 1', 'Content 1');
    manager.createNote('Note 2', 'Content 2');
    const notes = manager.getNotes();
    expect(notes.length).toBe(2);
  });

  test('Search notes', () => {
    manager.createNote('Meeting', 'Discuss project', ['work']);
    const results = manager.searchNotes('project');
    expect(results.length).toBe(1);
    expect(results[0].title).toBe('Meeting');
  });

  test('Export notes', () => {
    manager.createNote('Export Test', 'Content');
    const exportData = manager.exportNotes();
    expect(exportData).toContain('Export Test');
  });
   test('Search by title', () => {
    manager.createNote('Unique Title', 'Content');
    const results = manager.searchNotes('Unique');
    expect(results.length).toBe(1);
  });
  test('Search returns empty for no matches', () => {
    manager.createNote('Something', 'Content');
    const results = manager.searchNotes('nonexistent');
    expect(results.length).toBe(0);
  });
  test('Search by tags', () => {
    manager.createNote('Tagged', 'Content', ['urgent']);
    const results = manager.searchNotes('urgent');
    expect(results.length).toBe(1);
  });

});