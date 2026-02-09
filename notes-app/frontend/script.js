async function fetchNotes(query = '') {
    let url = '/notes';
    if (query) url += `?q=${encodeURIComponent(query)}`;
    const res = await fetch(url);
    const notes = await res.json();
    const notesList = document.getElementById('notes-list');
    notesList.innerHTML = '';
    if (notes.length === 0) {
        notesList.innerHTML = '<em>Aucune note trouvée.</em>';
        return;
    }
    notes.forEach(note => {
        const div = document.createElement('div');
        div.className = 'note';
        div.innerHTML = `<div class="note-title">${note.title}</div><div class="note-content">${note.content}</div><div><small>Étiquettes : ${(note.tags || []).join(', ')}</small></div>`;
        notesList.appendChild(div);
    });
}

document.getElementById('add-note-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const title = document.getElementById('note-title').value;
    const content = document.getElementById('note-content').value;
    const tagsRaw = document.getElementById('note-tags').value;
    const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
    await fetch('/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, tags })
    });
    document.getElementById('note-title').value = '';
    document.getElementById('note-content').value = '';
    document.getElementById('note-tags').value = '';
    fetchNotes();
});

document.getElementById('search-btn').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    fetchNotes(query);
});

document.getElementById('clear-search-btn').addEventListener('click', function() {
    document.getElementById('search-input').value = '';
    fetchNotes();
});

window.onload = () => fetchNotes();
