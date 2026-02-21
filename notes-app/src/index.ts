import express from 'express';
import * as path from 'path';
import { NotesManager } from './NotesManager';
import { NoteRoutes } from './NoteRoutes';

const app = express();
const port = 3000;
const manager = new NotesManager();

// Configure Pug as template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount all routes (UI + API)
const noteRoutes = new NoteRoutes(manager);
app.use('/', noteRoutes.getRouter());

// FAMIX Model: Generated via ts2famix (run npm run model first)
app.get('/model', (req, res) => {
  const fs = require('fs');
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