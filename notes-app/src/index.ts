import express from 'express';
import { NotesManager } from './NotesManager';

const app = express();
const port = 3000;
const manager = new NotesManager();

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Notes API running. Endpoints: POST /notes, GET /notes, GET /notes?q=search, GET /notes/export, GET /model');
});

// API Endpoints for functionalities
app.post('/notes', (req, res) => {
  const { title, content, tags } = req.body;
  const note = manager.createNote(title, content, tags);
  res.json(note);
});

app.get('/notes', (req, res) => {
  const query = req.query.q as string;
  if (query) {
    res.json(manager.searchNotes(query));
  } else {
    res.json(manager.getNotes());
  }
});

app.get('/notes/export', (req, res) => {
  res.type('json').send(manager.exportNotes());
});

// FAMIX Model: Generated via ts2famix (run npm run model first)
app.get('/model', (req, res) => {
  const fs = require('fs');
  const path = require('path');
  const modelPath = path.join(__dirname, '../dist/model.json');
  if (fs.existsSync(modelPath)) {
    res.json(JSON.parse(fs.readFileSync(modelPath, 'utf-8')));
  } else {
    res.status(404).json({ error: 'Model not generated. Run npm run model first.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});