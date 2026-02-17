# Visualization Pipeline

This directory contains a Python script that generates visualization charts from the `classes_export.csv` data.

## Files

- `Visualisation.py` - Main script that generates visualization charts
- `requirements.txt` - Python dependencies required to run the script

## Generated Charts

The script generates the following visualization files (both PNG and SVG formats):

1. **graphique_comparaison_metriques** - Bar chart comparing metrics across classes
2. **graphique_radar_metriques** - Radar charts for each class showing all metrics
3. **graphique_heatmap_metriques** - Heatmap visualization of metrics
4. **Figure_8_Complexite_vs_Taille** - Scatter plot showing complexity vs size

## Automated Pipeline

The visualization pipeline is automated using GitHub Actions (`.github/workflows/visualisation.yml`).

### When it runs

The pipeline automatically runs when:
- Changes are pushed to `classes_export.csv`
- Changes are pushed to `tp1-python-visualisations/Visualisation.py`
- Manually triggered from the GitHub Actions UI (workflow_dispatch)

### What it does

1. Checks out the repository
2. Sets up Python 3.9
3. Installs dependencies from `requirements.txt`
4. Copies `classes_export.csv` to the visualization directory
5. Runs `Visualisation.py` to generate charts
6. Copies generated PNG and SVG files to repository root
7. Auto-commits and pushes the generated files with message "Auto-generate visualization charts [skip ci]"

The `[skip ci]` tag in the commit message prevents infinite loops by skipping CI on auto-generated commits.

## Manual Usage

To run the visualization script locally:

```bash
# Install dependencies
pip install -r tp1-python-visualisations/requirements.txt

# Copy CSV file
cp classes_export.csv tp1-python-visualisations/

# Run the script
cd tp1-python-visualisations
python Visualisation.py
```

The generated PNG and SVG files will be created in the `tp1-python-visualisations` directory.
