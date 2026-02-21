import { Note } from './Note';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class NoteValidator {
  validateNoteInput(title: string, content: string, tags: string[]): ValidationResult {
    const errors: string[] = [];

    if (!title || title.trim().length === 0) {
      errors.push('Le titre est requis.');
    }

    if (title && title.trim().length > 200) {
      errors.push('Le titre ne peut pas depasser 200 caracteres.');
    }

    if (!content || content.trim().length === 0) {
      errors.push('Le contenu est requis.');
    }

    if (content && content.trim().length > 5000) {
      errors.push('Le contenu ne peut pas depasser 5000 caracteres.');
    }

    if (tags && tags.length > 10) {
      errors.push('Maximum 10 tags par note.');
    }

    if (tags) {
      for (const tag of tags) {
        if (tag.trim().length > 50) {
          errors.push('Chaque tag ne peut pas depasser 50 caracteres.');
          break;
        }
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  sanitizeString(input: string): string {
    if (!input) return '';
    return input.trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  parseTags(tagsInput: string): string[] {
    if (!tagsInput || tagsInput.trim().length === 0) {
      return [];
    }
    return tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  }
}
