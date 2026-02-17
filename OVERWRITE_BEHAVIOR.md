# Overwrite and Commit Behavior

## How the Pipeline Handles Existing Images

### ✅ Guaranteed Behavior

The visualization pipeline is designed to **safely overwrite existing images** and commit them properly.

## Step-by-Step Process

### 1. **File Generation**
```bash
cd tp1-python-visualisations
python Visualisation.py
# Generates 8 files in current directory
```

### 2. **Force Overwrite to images/ folder**
```bash
cp -f tp1-python-visualisations/*.png images/
cp -f tp1-python-visualisations/*.svg images/
```
- The `-f` flag forces overwrite without prompting
- Existing files are replaced with new versions
- No errors if files already exist

### 3. **Git Staging**
```bash
git add images/graphique_*.png images/graphique_*.svg images/Figure_*.png images/Figure_*.svg
```
- Stages all generated visualization files
- Git detects which files actually changed
- Only modified files are staged for commit

### 4. **Smart Commit Logic**
```bash
if git diff --staged --quiet; then
  echo "No changes to commit (images unchanged)"
else
  git commit -m "Auto-generate visualization charts [skip ci]"
  git push
fi
```

**Two scenarios:**

**Scenario A: Images Changed**
- ✅ Changes detected by git
- ✅ Commit created with updated images
- ✅ Push to repository
- ✅ You see new commit from github-actions[bot]

**Scenario B: Images Unchanged**
- ℹ️ No changes detected (data is the same)
- ℹ️ No commit created (nothing to update)
- ℹ️ No push happens
- ℹ️ This is correct behavior (avoids empty commits)

## Test Results

We tested the workflow behavior:

```
=== Test Output ===
1. Current state - files exist in images/
  ✓ File exists

2. Generating new visualization files...
  ✓ All files generated

3. Copying files to images/ (with overwrite)...
  ✓ PNG files copied (overwriting)
  ✓ SVG files copied (overwriting)

4. Git staging and status check...
  Git status after staging:
  M  images/Figure_8_Complexite_vs_Taille.svg
  M  images/graphique_comparaison_metriques.svg
  M  images/graphique_heatmap_metriques.svg
  M  images/graphique_radar_metriques.svg

  ✓ Changes detected - would commit and push
```

## What You'll See in GitHub Actions Logs

When the workflow runs, you'll see output like:

```
✓ PNG files copied to images/ (overwriting if exists)
  Copied PNG files: 4

✓ SVG files copied to images/ (overwriting if exists)
  Copied SVG files: 4

Files to be staged:
images/graphique_comparaison_metriques.png
images/graphique_comparaison_metriques.svg
images/graphique_radar_metriques.png
images/graphique_radar_metriques.svg
images/graphique_heatmap_metriques.png
images/graphique_heatmap_metriques.svg
images/Figure_8_Complexite_vs_Taille.png
images/Figure_8_Complexite_vs_Taille.svg

Git status after staging:
M  images/Figure_8_Complexite_vs_Taille.png
M  images/graphique_comparaison_metriques.png
[etc...]

✓ Changes detected, committing...
✓ Pushing to repository...
✓ Successfully pushed updated visualizations
```

## Error Handling

**Q: What if the images folder doesn't exist?**
- The workflow will fail at the copy step
- Solution: The `images/` folder already exists in the repository

**Q: What if the visualization script fails?**
- No files will be generated
- Copy step will show: "⚠ No PNG files found"
- No commit will be made
- Workflow will complete but no changes pushed

**Q: What if git push fails?**
- The workflow will show the error
- Usually means permission issues (already configured correctly)
- Status will show as "failed" in Actions tab

## Summary

✅ **Overwrite**: Files are ALWAYS overwritten with `cp -f`  
✅ **Commit**: Only happens if files actually changed  
✅ **Push**: Only happens if commit was created  
✅ **No Errors**: Process handles all scenarios gracefully  

The workflow is smart: it won't create empty commits, but will always commit when images are actually updated.

