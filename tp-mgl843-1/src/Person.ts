export class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    if (age < 0) throw new Error("Age cannot be negative");  // Constraint from PDF
    this.age = age;
  }

  toString(): string {
    return `${this.name} (${this.age} years old)`;
  }
}
