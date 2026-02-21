import { NoteValidator } from '../NoteValidator';
import { NotesManager } from '../NotesManager';
import * as fs from 'fs';
import * as path from 'path';

const TEST_FILE = path.join(__dirname, '../../notes.json');

function cleanup() {
  if (fs.existsSync(TEST_FILE)) fs.unlinkSync(TEST_FILE);
}

// ============================================================
// NoteValidator Tests
// ============================================================
describe('NoteValidator', () => {
  const validator = new NoteValidator();

  test('Valid input passes validation', () => {
    const result = validator.validateNoteInput('Title', 'Content', ['tag1']);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('Empty title fails validation', () => {
    const result = validator.validateNoteInput('', 'Content', []);
    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  test('Empty content fails validation', () => {
    const result = validator.validateNoteInput('Title', '', []);
    expect(result.isValid).toBe(false);
  });

  test('Too many tags fails validation', () => {
    const tags = Array.from({ length: 11 }, (_, i) => `tag${i}`);
    const result = validator.validateNoteInput('Title', 'Content', tags);
    expect(result.isValid).toBe(false);
  });

  test('Long tag fails validation', () => {
    const result = validator.validateNoteInput('Title', 'Content', ['a'.repeat(51)]);
    expect(result.isValid).toBe(false);
  });

  test('sanitizeString trims and escapes HTML', () => {
    expect(validator.sanitizeString('  hello <script>  ')).toBe('hello &lt;script&gt;');
  });

  test('sanitizeString handles empty input', () => {
    expect(validator.sanitizeString('')).toBe('');
  });

  test('parseTags splits comma-separated tags', () => {
    expect(validator.parseTags('tag1, tag2, tag3')).toEqual(['tag1', 'tag2', 'tag3']);
  });

  test('parseTags handles empty string', () => {
    expect(validator.parseTags('')).toEqual([]);
  });

  test('parseTags filters empty tags', () => {
    expect(validator.parseTags('tag1, , tag2')).toEqual(['tag1', 'tag2']);
  });
});

// ============================================================
// NotesManager - deleteNote Tests
// ============================================================
describe('NotesManager - Delete', () => {
  beforeEach(cleanup);
  afterAll(cleanup);

  test('Delete an existing note', () => {
    const manager = new NotesManager();
    const note = manager.createNote('To Delete', 'Content');
    expect(manager.getNotes().length).toBe(1);

    const deleted = manager.deleteNote(note.id);
    expect(deleted).toBe(true);
    expect(manager.getNotes().length).toBe(0);
  });

  test('Delete a non-existing note returns false', () => {
    const manager = new NotesManager();
    const deleted = manager.deleteNote('non-existent-id');
    expect(deleted).toBe(false);
  });
});
