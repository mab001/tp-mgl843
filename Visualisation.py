import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Lire le fichier CSV
df = pd.read_csv('classes_export.csv')

# Afficher les 10 premières lignes
print(df.head(10))

# Afficher des informations générales
print("\n=== Informations générales ===")
print(df.info())

# Afficher des statistiques
print("\n=== Statistiques ===")
print(df.describe())

# Afficher le nombre de lignes et colonnes
print(f"\nDimensions: {df.shape[0]} lignes, {df.shape[1]} colonnes")

# Afficher les noms des colonnes
print(f"\nColonnes: {df.columns.tolist()}")

# ===== GRAPHIQUE GLOBAL: TOUTES LES MÉTRIQUES =====
sns.set_style("whitegrid")

fig, ax = plt.subplots(figsize=(14, 8))

# Données
categories = df['ClassName'].tolist()
methods = df['NumberOfMethods'].tolist()
attributes = df['NumberOfAttributes'].tolist()
lines_of_code = df['LinesOfCode'].tolist()

# Positions des barres
x = np.arange(len(categories))
width = 0.25

# Créer les barres
bars1 = ax.bar(x - width, methods, width, label='Nombre de méthodes', color='#3B82F6', edgecolor='black', linewidth=1.2)
bars2 = ax.bar(x, attributes, width, label='Nombre d\'attributs', color='#10B981', edgecolor='black', linewidth=1.2)
bars3 = ax.bar(x + width, lines_of_code, width, label='Lignes de code', color='#EF4444', edgecolor='black', linewidth=1.2)

# Ajouter les valeurs sur les barres
for bars in [bars1, bars2, bars3]:
    for bar in bars:
        height = bar.get_height()
        ax.text(bar.get_x() + bar.get_width()/2., height,
                f'{int(height)}',
                ha='center', va='bottom', fontsize=10, fontweight='bold')

# Personnaliser le graphique
ax.set_xlabel('Classes', fontsize=12, fontweight='bold')
ax.set_ylabel('Valeur', fontsize=12, fontweight='bold')
ax.set_title('Comparaison des métriques par classe', fontsize=16, fontweight='bold', pad=20)
ax.set_xticks(x)
ax.set_xticklabels(categories, fontsize=11)
ax.legend(fontsize=11, loc='upper left')
ax.set_facecolor('#F3F4F6')
fig.patch.set_facecolor('white')

# Grid
ax.grid(axis='y', alpha=0.3, linestyle='--')
ax.set_axisbelow(True)

plt.tight_layout()

# Sauvegarder en PNG et SVG
plt.savefig('graphique_comparaison_metriques.png', dpi=300, bbox_inches='tight')
plt.savefig('graphique_comparaison_metriques.svg', format='svg', bbox_inches='tight')
print("\n✓ Graphique comparaison sauvegardé: graphique_comparaison_metriques.png et .svg")
plt.show()

# ===== GRAPHIQUE 2: RADAR CHART (POUR CHAQUE CLASSE) =====

from math import pi

categories_metrics = ['Méthodes', 'Attributs', 'Lignes de code']
num_vars = len(categories_metrics)

angles = [n / float(num_vars) * 2 * pi for n in range(num_vars)]
angles += angles[:1]

fig, axes = plt.subplots(1, len(categories), figsize=(15, 5), subplot_kw=dict(projection='polar'))

for idx, class_name in enumerate(df['ClassName']):
    ax = axes[idx]
    
    values = [
        df.loc[idx, 'NumberOfMethods'],
        df.loc[idx, 'NumberOfAttributes'],
        df.loc[idx, 'LinesOfCode']
    ]
    values += values[:1]
    
    ax.plot(angles, values, 'o-', linewidth=2, color=['#3B82F6', '#10B981', '#EF4444'][idx])
    ax.fill(angles, values, alpha=0.25, color=['#3B82F6', '#10B981', '#EF4444'][idx])
    ax.set_xticks(angles[:-1])
    ax.set_xticklabels(categories_metrics, fontsize=10)
    ax.set_ylim(0, max(df['LinesOfCode'].max(), df['NumberOfMethods'].max()) * 1.1)
    ax.set_title(f'{class_name}', fontsize=12, fontweight='bold', pad=20)
    ax.grid(True)

plt.tight_layout()
plt.savefig('graphique_radar_metriques.png', dpi=300, bbox_inches='tight')
plt.savefig('graphique_radar_metriques.svg', format='svg', bbox_inches='tight')
print("✓ Graphique radar sauvegardé: graphique_radar_metriques.png et .svg")
plt.show()

# ===== GRAPHIQUE 3: HEATMAP =====

fig, ax = plt.subplots(figsize=(10, 6))

# Préparer les données pour la heatmap
data_for_heatmap = df[['ClassName', 'NumberOfMethods', 'NumberOfAttributes', 'LinesOfCode']].set_index('ClassName')

# Créer la heatmap
sns.heatmap(data_for_heatmap.T, annot=True, fmt='d', cmap='YlOrRd', cbar_kws={'label': 'Valeur'}, ax=ax, linewidths=2)

ax.set_title('Heatmap des métriques par classe', fontsize=16, fontweight='bold', pad=20)
ax.set_xlabel('Classes', fontsize=12, fontweight='bold')
ax.set_ylabel('Métriques', fontsize=12, fontweight='bold')

plt.tight_layout()
plt.savefig('graphique_heatmap_metriques.png', dpi=300, bbox_inches='tight')
plt.savefig('graphique_heatmap_metriques.svg', format='svg', bbox_inches='tight')
print("✓ Graphique heatmap sauvegardé: graphique_heatmap_metriques.png et .svg")
plt.show()

print("\n✓ Tous les graphiques multi-métriques ont été générés en PNG et SVG!")