# Visualization Workflow Status

## Current Situation

The visualization pipeline has been successfully configured and is ready to use!

### ✅ What's Been Done

1. **Workflow Created**: `.github/workflows/visualisation.yml`
   - Runs Python script to generate visualizations
   - Automatically commits PNG/SVG files to `images/` folder
   - Uses `[skip ci]` to prevent infinite loops

2. **Branch Configuration**: 
   - Triggers on `main` and `master` branches (production)
   - Triggers on `copilot/**` branches (for testing)
   - Can be manually triggered via GitHub Actions UI

3. **Output Location**:
   - All generated files go to `images/` directory
   - 8 files total: 4 PNG + 4 SVG

### 🔄 Current Status

**Workflow Run #2** - Status: `action_required`

This status typically means:
- The workflow needs approval to run on this branch
- This is a security feature for workflows on feature branches
- Common when a workflow writes to the repository (commits files)

### 📋 How to Proceed

**Option 1: Manual Approval** (Recommended for Testing)
1. Go to: https://github.com/mab001/tp-mgl843/actions/runs/22082277270
2. Review the workflow
3. Click "Approve and run" if prompted
4. The workflow will execute and commit files to `images/`

**Option 2: Wait for Merge** (Recommended for Production)
1. Merge this PR to `main` branch
2. Future changes to CSV or script will automatically trigger workflow
3. No approval needed on main branch

**Option 3: Manual Trigger** (Works Anytime)
1. Go to Actions tab: https://github.com/mab001/tp-mgl843/actions
2. Select "Generate Visualizations" workflow
3. Click "Run workflow"
4. Select your branch
5. Click "Run workflow" button

### 🎯 When Will Images Be Generated?

**Automatically:**
- When you push changes to `classes_export.csv` (on main/master/copilot/*)
- When you push changes to `Visualisation.py` (on main/master/copilot/*)

**Manually:**
- Anytime via GitHub Actions UI workflow_dispatch

### 📁 Where Will Images Be Stored?

All generated images will be in: **`images/`** directory

Files generated:
- `images/graphique_comparaison_metriques.png` + `.svg`
- `images/graphique_radar_metriques.png` + `.svg`
- `images/graphique_heatmap_metriques.png` + `.svg`
- `images/Figure_8_Complexite_vs_Taille.png` + `.svg`

### ✨ Next Steps

1. **Approve the workflow run** (if you want to test on this branch)
2. **Or merge to main** (for production use)
3. The workflow will automatically commit updated visualizations whenever the data changes

---

## Summary

✅ **Pipeline is configured and ready**  
✅ **Images will go to `images/` folder**  
✅ **Workflow triggers on CSV/script changes**  
⏳ **Waiting for approval or merge to main**

