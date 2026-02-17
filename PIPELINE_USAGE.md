# Visualization Pipeline Usage Guide

## Overview

This repository now has an automated GitHub Actions pipeline that runs `Visualisation.py` and commits the generated PNG/SVG files automatically.

## How It Works

### Automatic Triggers

The pipeline automatically runs when you:
1. **Push changes to `classes_export.csv`** on the `main` or `master` branch
2. **Push changes to `tp1-python-visualisations/Visualisation.py`** on the `main` or `master` branch

When triggered, the pipeline will:
- Run the visualization script
- Generate 8 files (4 PNG and 4 SVG):
  - `graphique_comparaison_metriques.png` and `.svg`
  - `graphique_radar_metriques.png` and `.svg`
  - `graphique_heatmap_metriques.png` and `.svg`
  - `Figure_8_Complexite_vs_Taille.png` and `.svg`
- Automatically commit and push these files to the `images/` directory

### Manual Trigger

You can also run the pipeline manually:
1. Go to the "Actions" tab in your GitHub repository
2. Click on "Generate Visualizations" workflow
3. Click "Run workflow" button
4. Select the branch and click "Run workflow"

## Generated Files Location

All generated PNG and SVG files are placed in the **`images/`** directory of the repository.

## Understanding the Commit Message

When the pipeline commits files, it uses the message:
```
Auto-generate visualization charts [skip ci]
```

The `[skip ci]` tag prevents the pipeline from running again when it commits its own changes, avoiding infinite loops.

## Viewing the Results

After the pipeline runs:
1. Check the commit history - you'll see an automatic commit from `github-actions[bot]`
2. The visualization files will be in the `images/` directory
3. You can view the Actions run logs to see the pipeline execution details

## Local Development

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

## Troubleshooting

### Pipeline doesn't run
- Check that your changes are pushed to `main` or `master` branch
- Verify that you modified `classes_export.csv` or `Visualisation.py`
- Check the Actions tab for any error messages

### No files committed
- Check the Actions logs to see if the script ran successfully
- Verify that `Visualisation.py` generates files without errors
- Ensure the CSV file has valid data

### Permission errors
- The workflow has `contents: write` permission set
- This should allow it to commit and push files automatically

## Security

The pipeline follows GitHub Actions security best practices:
- Explicit permissions set (`contents: write`)
- No secrets or credentials exposed
- CodeQL security scanning passed with 0 alerts
