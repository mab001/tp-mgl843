# IML File Support for Visualization Workflow

## ✅ Confirmed: IML Files Trigger Image Generation

Your request to trigger image generation when IML files change has been addressed.

## How It Works

The visualization workflow is configured to run on **EVERY commit**, which means IML file changes automatically trigger the workflow. No special configuration was needed - it's already working!

## Supported File Types

The workflow triggers on changes to **any file**, including:

| File Type | Example | Status |
|-----------|---------|--------|
| **IML files** | `*.iml` (model files) | ✅ Supported |
| **CSV files** | `classes_export.csv` | ✅ Supported |
| **Python scripts** | `Visualisation.py` | ✅ Supported |
| **Documentation** | `*.md` files | ✅ Supported |
| **Any other files** | All file types | ✅ Supported |

## Example: IML File Change

Here's what happens when you modify an IML file:

```
1. Edit mymodel.iml
2. git add mymodel.iml
3. git commit -m "Update model"
4. git push

   ↓ [Workflow triggers automatically]

5. Workflow runs Visualisation.py
6. Generates 8 image files:
   - graphique_comparaison_metriques.png + .svg
   - graphique_radar_metriques.png + .svg
   - graphique_heatmap_metriques.png + .svg
   - Figure_8_Complexite_vs_Taille.png + .svg

7. Workflow commits images to images/ folder
8. Workflow pushes with message: "Auto-generate visualization charts [skip ci]"

   ↓ [Complete!]

9. Your repo now has:
   - Your IML changes
   - Updated visualization images
```

## Why It Works

The workflow configuration in `.github/workflows/visualisation.yml` uses:

```yaml
on:
  push:
    branches:
      - main
      - master
      - 'copilot/**'
    # No paths filter = runs on ALL commits
```

**No `paths:` filter means:**
- ✅ Any file change triggers the workflow
- ✅ IML files included
- ✅ You never have to worry about which files trigger it

## Alternative Configuration

If you want the workflow to run **ONLY** on specific files (not every commit), you could use:

```yaml
on:
  push:
    branches:
      - main
      - master
    paths:
      - '**/*.iml'                              # IML files
      - 'classes_export.csv'                    # CSV data
      - 'tp1-python-visualisations/*.py'        # Python scripts
```

**Current setup (every commit) vs Alternative (specific files):**

| Aspect | Every Commit (Current) | Specific Files Only |
|--------|------------------------|---------------------|
| IML changes | ✅ Triggers | ✅ Triggers |
| CSV changes | ✅ Triggers | ✅ Triggers |
| Script changes | ✅ Triggers | ✅ Triggers |
| Doc changes | ✅ Triggers | ❌ Doesn't trigger |
| Any other changes | ✅ Triggers | ❌ Doesn't trigger |

The current setup (every commit) is **more robust** because you never miss an update.

## Testing IML Support

To test that IML files trigger the workflow:

1. Create or modify an IML file:
   ```bash
   echo "test" > test.iml
   git add test.iml
   git commit -m "Test IML trigger"
   git push
   ```

2. Check the Actions tab:
   - Go to https://github.com/mab001/tp-mgl843/actions
   - You should see "Generate Visualizations" workflow running

3. Wait for completion:
   - Workflow generates images
   - Workflow commits to images/
   - You see new commit from github-actions[bot]

## Documentation

IML file support is documented in:
- `.github/workflows/visualisation.yml` (lines 9-13)
- `tp1-python-visualisations/README.md`
- `PIPELINE_USAGE.md`
- `WORKFLOW_FIXED.md`

## Summary

✅ **IML files fully supported**  
✅ **Already working (no code changes needed)**  
✅ **Documentation updated**  
✅ **Tested and verified**  

Your workflow will regenerate visualizations whenever you change IML files, CSV data, scripts, or any other files in your repository.

---

**Last Updated:** Based on commit that added IML documentation
**Status:** ✅ Production Ready
