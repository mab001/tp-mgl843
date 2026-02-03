async function fetchNotes() {
    const res = await fetch('/api/notes');
    const notes = await res.json();
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `<div class="note-title">${note.title}</div><div class="note-content">${note.content}</div>`;
        notesList.appendChild(div);
    });
}

document.getElementById('add-note-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    await fetch('/api/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
    });
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    fetchNotes();
});

window.onload = fetchNotes;
