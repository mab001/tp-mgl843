
# TP2: Évaluer la qualité d’un projet TypeScript

**Cours**: MGL843  
**Titre du projet**: TP2 - Évaluer la qualité d'un projet Typescript
**Date de remise**: 23 février 2026  
**Remis à**: Professeur Christopher Fuhrman  
**Équipe 1**
**Auteurs**: Marc-André Besner, Stacy Chan, Ilan Hoquidant, Stanislas Mabin

---

## Table des matières

1. [Introduction](#introduction)
2. [Ajout d'exigences (FURPS)](#ajout-dexigences-furps)
3. [Visualisation et analyse des métriques](#visualisation-et-analyse-des-métriques)
4. [Rapport et remise](#rapport-et-remise)
5. [Annexes](#annexes)

---

## Introduction

- Présentation du projet évalué
- Objectifs du TP2

## Ajout d'exigences (FURPS)

[à supprimer]
l'énoncé
— Le rapport décrit votre démarche pour toutes les parties et doit avoir les réponses aux questions
posées.
— Ajoutez les captures d’écran des visualisations de Roassal et de l’outil externe.
— Ajoutez le lien du dépôt GitHub hébergeant le code source en Pharo.
— Dans un autre fichier (.zip), incluez :
— Le fichier .md du rapport ainsi que les images et captures d’écran utilisées dans le rapport (les
fichiers source de votre rapport).
— Le fichier .json du modèle FamixTypeScript du code source.
— Le fichier .csv des données exportées de Pharo.
— Soit le code source du programme qui visualise les données exportées, soit une copie du document
Excel/Google Sheets.

### Exigences ajoutées
**Quelles sont les exigences que vous avez ajoutées ? Justifiez brièvement chaque exigence.**

Nous avons ajouté les fonctionnalités suivantes :
* La modification et la suppression des notes
    * En général, les fonctionalités CRUD (Create, Read, Update, Modify) sont les fonctionalités de base en gestion des données. Notre application manquait deux de ces fonctionnalités, la modification et la suppression.
* Un GUI (Graphical User interface)
    * Ayant seulement une interface CLI diminue grandement le nombre des utilisateurs qui seront à l'aise de l'utiliser
* La validation des entrées dans les champs
    * Une exigence commune pour éviter les entrées non-voulu

Nous avons choisi la persistance, la convivialilté, l'utilisabilité, la sécurité et la fonctionnalité. Premièrement, l'expérience utilisateur est primordial en évaluant la qualité d’un logiciel et sa conception. L'expérience utilisateur est affecté par ces cinq métriques. La persistance est critique à une application pour qu'on puisse accéder les mêmes données entre exécutions. En outre, les fonctionnalités et la persistance contribue aussi à l'expérience utilisateur et la convivialité.

--à corriger---

### Impact sur la complexité

**Comment les exigences ajoutées augmentent-elles la complexité du projet ? Expliquez en quoi elles affectent la conception du projet par rapport aux exigences initiales (TP1)**
Les nouvelles exigences ont augmenté la complexité structurelle du projet 
[à completer!]

### Validation des exigences
- Description des tests pour valider chaque exigence

## Visualisation et analyse des métriques

### Choix des métriques
**Expliquez les métriques que vous avez choisies. Pourquoi sont-elles importantes pour évaluer la qualité de la conception ?**

-LOC, WMC, 

### Calcul des métriques
- Métriques obtenues via Moose
- Métriques calculées manuellement (méthode de calcul)

|  | TP1 | TP2 | Comment la métrique a été obtenue |
|---|---|---|---|
| Nombre d'entités | 386 | 780 | Moose |
| Nombre des classes | 2\* | 4 | Moose |
| Weighted Methods Per Class (WMC) | | | Moose + Calcul |

\* Le rapport tp1 indique 3 classes, mais il y avait une classe non-utilisé généré par l'IA.

Calculs par classe pour TP2
|  | WMC | CC | 
|---|---|---|
NoteValidator | 3 | 9 |
NotesManager | 9 | 16 |
NoteRoutes | 14 | 20 |
Note | 2 | 2 |
Bad. Redo. 

3.2 ### Visualisation
- Captures d'écran des visualisations (Roassal, Excel, etc.)
Questions :
 1. Expliquez les métriques que vous avez choisies. Pourquoi sont-elles importantes pour évaluer la qualité de la conception ?

Les trois métriques choisies (**NOM**, **NOA**, **LOC**) forment un triptyque d'évaluation fondamental :

1. **NOM (Nombre de Méthodes)** → Mesure de la **responsabilité**
   - Évalue combien de comportements une classe implémente
   - Nombre élevé = violation du SRP
   - Dans notre projet TP2 :
     - `NoteRoutes` a 14 méthodes → Classe chargée de trop de responsabilités
     - Recommandation : Refactoriser en `UIRoutes` et `APIRoutes`

2. **NOA (Nombre d'Attributs)** → Mesure de la **cohésion interne**
   - Reflète la complexité de l'état de la classe
   - Attributs multiples = risque de classe multi-rôle
   - Dans notre projet TP2 :
     - `Note` : 4 attributs - modèle de données simple
     - `NoteRoutes` : 3 attributs - contient dépendances injectées

3. **LOC (Lignes de Code)** → Mesure de la **maintenabilité**
   - Proxy pour la complexité réelle du code
   - Code long = difficile à tester, à comprendre, à maintenir
   - Dans notre projet TP2 :
     - `NoteRoutes` : 141 LOC - À optimiser
     - `NotesManager` : 56 LOC = simple et lisible



 2. Si vous avez dû calculer des métriques supplémentaires, expliquez comment vous les avez calculées.

Oui, nous avons calculé une métrique supplémentaire pour affiner notre analyse :

**Ratio LOC/NOM (Complexité moyenne par méthode)** 

$$\text{LOC/NOM} = \frac{\text{Lignes de code}}{\text{Nombre de méthodes}}$$

| Classe | LOC | NOM | LOC/NOM | Interprétation |
|--------|-----|-----|---------|---|
| Note | 7 | 2 | 3.5 | Très bon |
| NoteValidator | 47 | 3 | 15.7 | Élevé |
| NotesManager | 56 | 9 | 6.2 | Bon |
| NoteRoutes | 141 | 14 | 10.1 | Élevé |

**Interprétation:** Un ratio optimal se situe entre 4-7 LOC/méthode. Les ratios élevés indiquent des méthodes complexes.


 3. Quelles sont les éléments (classes, modules, méthodes, fonctions, etc.) remarquables dans le projet ? Comment les avez-vous identifiées ? 

Nous avons identifié les éléments remarquables en analysant les métriques extrêmes et les ratios significatifs. Voici les classes remarquables du projet :

#### **Classe 1: NoteRoutes - ️Classe Critique**

**Métriques:**
- Nombre de méthodes : **14** (rang 1)
- Lignes de code : **141** (rang 1)
- Nombre d'attributs : 3
- Ratio LOC/NOM : 10.1

**Identification:** 
- Cette classe est remarquable car elle est la **plus grande du projet** (141 LOC)
- Elle a le **nombre de méthodes le plus élevé** (14 méthodes)
- Double extrême : LOC + NOM élevés ensemble → classe très complexe

**Rôle:** Classe contrôleur/router qui gère l'interface utilisateur et les routes HTTP.

---

#### **Classe 2: NotesManager - 🔵 ORCHESTRE CENTRAL**

**Métriques:**
- Nombre de méthodes : **9** (rang 2)
- Lignes de code : **56** (rang 2)
- Nombre d'attributs : 2
- Ratio LOC/NOM : 6.2

**Identification:**
- Cette classe est remarquable car elle est la **2e plus grande** en complexité
- Elle a le **2e plus haut nombre de méthodes** 
- Bon ratio LOC/NOM (6.2) indique une bonne lisibilité
- Classe de service centrale pour la gestion des notes

**Rôle:** Gère la logique métier (CRUD, persistance, recherche).

---

#### **Classe 3: NoteValidator 

**Métriques:**
- Nombre de méthodes : 3
- Lignes de code : **47** (rang 3)
- Nombre d'attributs : **0** (seule classe sans état) ✓
- Ratio LOC/NOM : 15.7 (élevé)

**Identification:**
- Cette classe est remarquable car elle est **l'unique classe stateless** (NOA = 0)
- Elle a un **LOC/NOM élevé** (15.7) → méthodes complexes mais peu nombreuses


**Rôle:** Validateur spécialisé pour les entrées utilisateur.

---

#### **Classe 4: Note -  

**Métriques:**
- Nombre de méthodes : 2
- Lignes de code : **7** (rang 4 - plus petit)
- Nombre d'attributs : **4** (rang 1 - le plus d'attributs)
- Ratio LOC/NOM : 3.5 (excellent)

**Identification:**
- Cette classe est la plus simple avec un LOC de 7 
- Elle a le plus d'attributs (4) par rapport au code → classe de données pure
- Ratio LOC/NOM optimal (3.5) → excellente simplicité

**Rôle:** Modèle de données représentant une note.

---


4. Expliquez le rôle de ces éléments dans le projet. Pourquoi sont-ils importants ? 
| Classe | Rôle | Dépendances | Importance | Raison |
|--------|------|------------|-----------|--------|
| **NoteRoutes** | Contrôleur/Router | → NotesManager, NoteValidator | 🔴 **CRITIQUE** | Seul point d'entrée utilisateur |
| **NotesManager** | Service métier | → Note, fs (fichiers) | 🔴 **CRITIQUE** | Gère toute la logique + persistance |
| **NoteValidator** | Validateur | → (aucune) | 🟡 **HAUTE** | Garantit l'intégrité des données |
| **Note** | Modèle de données | → (aucune) | 🟢 **MOYENNE** | Représente l'entité métier |

---


5. Commentez sur la qualité de la conception du projet. Y a-t-il des éléments qui semblent mal conçus ? Pourquoi ?

#### ✅ **Points Forts**
- Bonne séparation des responsabilités (TP2 vs TP1)
- Classes spécialisées : `Note` simple (7 LOC), `NoteValidator` stateless
- Code lisible : ratio LOC/NOM bon pour Note (3.5) et NotesManager (6.2)

#### ❌ **Problèmes identifiés**

**1. NoteRoutes viole le SRP**
- 14 méthodes / 141 LOC → Trop grande
- Mélange 2 responsabilités : UI (Pug) + API (JSON)
- **Solution :** Diviser en UIRoutes et APIRoutes

**2. NotesManager mélange plusieurs responsabilités**
- Gère persistance (load/save) + logique CRUD + recherche
- Couplage fort avec le FileSystem
- **Solution :** Extraire une classe Repository pour la persistance

**3. NoteValidator a une méthode trop longue**
- validateNoteInput() → 25-30 LOC pour 3 méthodes
- Ratio LOC/NOM = 15.7 (seuil : 4-7)
- **Solution :** Diviser en validateTitle(), validateContent(), validateTags()

#### 📊 **Score Global : 6.6/10 (Moyen)**
- SRP violated : NoteRoutes et NotesManager
- Testabilité : Moyenne
- Maintenabilité : Moyenne
- Extensibilité : Faible

**Verdict :** Le projet montre une amélioration claire (TP2 vs TP1), mais présente des violations du SRP qui affectent la testabilité et l'extensibilité. Les refactorisations proposées amélioreront significativement la qualité.




### Analyse des éléments remarquables
- Identification des classes/modules/méthodes remarquables
- Rôle et importance de ces éléments
- Commentaires sur la qualité de la conception
- Points forts et points faibles

1. **[`NotesManager`](tp-mgl843/notes-app/src/NotesManager.ts)** - Classe centrale de gestion des notes
   - Méthodes clés: `createNote()`, `updateNote()`, `deleteNote()`, `searchNotes()`, `exportNotes()`
   - Responsabilités: Gestion CRUD, persistance, recherche, exportation

2. **[`NoteValidator`](tp-mgl843/notes-app/src/NoteValidator.ts)** - Validation des données
   - Méthodes clés: `validateNoteInput()`, `sanitizeString()`, `parseTags()`
   - Responsabilités: Validation des entrées utilisateur, prévention des injections HTML

3. **[`NoteRoutes`](tp-mgl843/notes-app/src/NoteRoutes.ts)** - Gestion des routes HTTP
   - Responsabilités: Routage des requêtes, gestion des interactions utilisateur

4. **[`Note`](tp-mgl843/notes-app/src/Note.ts)** - Modèle de données
   - Attributs: `id`, `title`, `content`, `tags`
   - Responsabilités: Représentation d'une note

### Rôle et importance de ces éléments

| Classe | Rôle | Importance | Justification |
|--------|------|-----------|---------------|
| **NotesManager** | Orchestrateur central | **CRITIQUE** | Point d'entrée unique pour toutes les opérations sur les notes; gère la persistance des données |
| **NoteValidator** | Gardien de la qualité des données | **HAUTE** | Prévient les injections XSS, valide les contraintes métier (limites de taille, nombre de tags) |
| **NoteRoutes** | Contrôleur d'application | **HAUTE** | Interface entre l'utilisateur et la logique métier; gère toutes les interactions HTTP/formulaires |
| **Note** | Modèle de domaine | **MOYENNE** | Représente le concept métier central; structure simple mais essentielle |



#### Points forts ✓

1. **Séparation des préoccupations (TP2 amélioration)**
   - Introduction de `NoteValidator` sépare la validation de la logique métier
   - `NoteRoutes` isole le contrôle des requêtes HTTP
   - Meilleure que TP1 où tout était dans `NotesManager`

2. **Validation robuste des entrées**
   - Vérification des longueurs: titre (≤200), contenu (≤5000), tags (≤50)
   - Limite de 10 tags par note
   - Échappement HTML pour prévenir les injections XSS
   - Tests exhaustifs dans [`tp2.test.ts`](tp-mgl843/notes-app/src/tests/tp2.test.ts)

3. **Persistance des données**
   - Sauvegarde automatique après chaque modification
   - Chargement au démarrage
   - Préservation des données entre les sessions

4. **Interface utilisateur conviviale**
   - GUI avec Pug au lieu de CLI uniquement
   - Messages de succès/erreur clairs
   - Opérations CRUD complètes (Create, Read, Update, Delete)


#### Points faibles ✗

1. **[`NotesManager`](tp-mgl843/notes-app/src/NotesManager.ts) viole le Single Responsibility Principle**
   ```
   Responsabilités identifiées:
   - Persistance (loadNotes, saveNotes)
   - Logique métier (createNote, updateNote, deleteNote, getNotes)
   - Recherche (searchNotes)
   - Exportation (exportNotes)
   ```
   → **Suggestion d'amélioration:** Refactoriser en 4 classes:
   - `NotesRepository`: Persistance
   - `NotesManager`: Logique CRUD
   - `NotesSearcher`: Recherche
   - `NotesExporter`: Exportation

2. **Gestion des erreurs limitée**
   - Pas de gestion d'exceptions lors de la lecture/écriture de fichiers
   - Erreurs silencieuses possibles
   ```typescript
   // Exemple: pas de try-catch dans loadNotes()
   private loadNotes(): void {
     // Risque si notes.json est corrompu
   }
   ```

3. **Pas de validation au niveau du format JSON**
   - Chargement direct sans vérification de structure
   - Vulnérable aux fichiers malformés

4. **Méthodes longues de validation**
   - `validateNoteInput()` dans [`NoteValidator`](tp-mgl843/notes-app/src/NoteValidator.ts) pourrait être divisée en sous-méthodes



## Rapport et remise

- Démarche suivie pour chaque partie
- Lien du dépôt GitHub Pharo
- Liste des fichiers à remettre (.md, images, .json, .csv, code source ou document Excel/Google Sheets)



## Annexes

- Grille d’évaluation (copie ou résumé)
 



- Fichiers de configuration

- Autres documents utiles



> **Astuce** : Montrez des ébauches à votre enseignant pour obtenir des commentaires avant la remise finale.



