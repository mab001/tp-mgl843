# Visualisations des métriques FAMIX

## Prérequis
- Python 3.x
- pip

## Utilisation

### Étape 1 — Mettre à jour le modèle FAMIX et le CSV
```bash
cd notes-app
npm install
npm run model
npm run export-csv
```

### Étape 2 — Installer les dépendances Python
```bash
cd python-visualisations
pip install -r requirements.txt
```

### Étape 3 — Générer les visualisations
```bash
python Visualisation.py
```

## Graphiques générés
- `graphique_comparaison_metriques.png/svg` — Barres groupées par classe
- `graphique_radar_metriques.png/svg` — Radar chart par classe
- `graphique_heatmap_metriques.png/svg` — Heatmap des métriques
- `Figure_8_Complexite_vs_Taille.png/svg` — Complexité vs Taille
