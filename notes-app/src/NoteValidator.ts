export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

export class NoteValidator {
  validateNoteInput(title: string, content: string, tags: string[]): ValidationResult {
    const errors: string[] = [];

    this.validateTitle(title, errors);
    this.validateContent(content, errors);
    this.validateTags(tags, errors);

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  private validateTitle(title: string, errors: string[]): void {
    if (!title || title.trim().length === 0) {
      errors.push('Le titre est requis.');
    } else if (title.trim().length > 200) {
      errors.push('Le titre ne peut pas depasser 200 caracteres.');
    }
  }

  private validateContent(content: string, errors: string[]): void {
    if (!content || content.trim().length === 0) {
      errors.push('Le contenu est requis.');
    } else if (content.trim().length > 5000) {
      errors.push('Le contenu ne peut pas depasser 5000 caracteres.');
    }
  }

  private validateTags(tags: string[], errors: string[]): void {
    if (!tags) return;

    if (tags.length > 10) {
      errors.push('Maximum 10 tags par note.');
    }

    for (const tag of tags) {
      if (tag.trim().length > 50) {
        errors.push('Chaque tag ne peut pas depasser 50 caracteres.');
        break;
      }
    }
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
