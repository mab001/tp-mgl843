// Serve static files from frontend (for script.js, etc.)
app.use(express.static(path.join(__dirname, '../../frontend')));
import express from 'express';
import path from 'path';
import { NotesManager } from './NotesManager';
import cors from 'cors';

const app = express();
const port = 3000;
const manager = new NotesManager();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../../frontend'));

// Manually set CORS headers for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Change * to your frontend URL for production
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(cors());
app.use(express.json());

// Root route renders the Pug template
app.get('/', (req, res) => {
  res.render('index', { title: 'Notes App' });
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