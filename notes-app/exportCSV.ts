import * as fs from 'fs';
import * as path from 'path';
import { loadFamixModel, aggregateFamixClassMetrics } from './src/famixMetrics';

const modelPath = path.join(__dirname, 'dist', 'model.json');
const model = loadFamixModel(modelPath);
const metrics = aggregateFamixClassMetrics(model);

const header = '"ClassName","NumberOfMethods","NumberOfAttributes","LinesOfCode"';
const rows = metrics.map(m =>
  `"${m.className}","${m.numberOfMethods}","${m.numberOfAttributes}","${m.linesOfCode}"`
);

const csv = [header, ...rows].join('\n');
const outputPath = path.join(__dirname, '..', 'classes_export.csv');
fs.writeFileSync(outputPath, csv, 'utf-8');

console.log('✓ classes_export.csv mis à jour :');
console.table(metrics);
