// Converted from script.js to TypeScript with Pug template rendering
// Assumes you have installed 'pug' via npm for template compilation
import pug from 'pug';

// Example Pug template as a string (replace with your actual template)
const template = `
html
  head
    title Notes App
  body
    h1 Notes
    ul#notes-list
    form#note-form
      input(type='text', id='note-input', placeholder='Add a note')
      button(type='submit') Add
`;

// Compile the Pug template to HTML
const compiledTemplate = pug.compile(template);

document.addEventListener('DOMContentLoaded', () => {
  // Render the compiled HTML into the page
  document.body.innerHTML = compiledTemplate();

  const notesList = document.getElementById('notes-list') as HTMLUListElement;
  const noteForm = document.getElementById('note-form') as HTMLFormElement;
  const noteInput = document.getElementById('note-input') as HTMLInputElement;

  // Example notes array
  let notes: string[] = [];

  function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, idx) => {
      const li = document.createElement('li');
      li.textContent = note;
      notesList.appendChild(li);
    });
  }

  noteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = noteInput.value.trim();
    if (value) {
      notes.push(value);
      noteInput.value = '';
      renderNotes();
    }
  });

  renderNotes();
});
