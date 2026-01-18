export class Note {
  id: string;
  title: string;
  content: string;
  tags: string[];

  constructor(id: string, title: string, content: string, tags: string[] = []) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.tags = tags;
  }

  toJSON() {
    return { id: this.id, title: this.title, content: this.content, tags: this.tags };
  }
}