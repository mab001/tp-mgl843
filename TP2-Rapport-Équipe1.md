
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
    * En général, les fonctionalités CRUD (Create, Read, Update, Modify) sont les fonctionalités de base en gestion des données. Notre application manquait deux des ces fonctionnalités, la modification et la suppression.
* Un GUI (Graphical User interface)
    * Ayant seulement une interface CLI diminue grandement le nombre des utilisateurs qui seront à l'aise de l'utiliser
* La validation des entrées dans les champs
    * Une exigence commune pour éviter les entrées non-voulu

### Impact sur la complexité

**Comment les exigences ajoutées augmentent-elles la complexité du projet ? Expliquez en quoi elles affectent la conception du projet par rapport aux exigences initiales (TP1)**

[à completer!]

|  | TP1 | TP2 |
|---|---|---|
| Nombre d'entités | | 780 |
| Nombre des classes | 2\* | 4 |


\* Le rapport tp1 indique 3 classes, mais il y avait une classe non-utilisé généré par l'IA.


### Validation des exigences
- Description des tests pour valider chaque exigence

## Visualisation et analyse des métriques

### Choix des métriques
**Expliquez les métriques que vous avez choisies. Pourquoi sont-elles importantes pour évaluer la qualité de la conception ?**

Nous avons choisi la persistance, la convivialilté, l'utilisabilité, la sécurité et la fonctionnalité. Premièrement, l'expérience utilisateur est primordial en évaluant la qualité d'une logiciel et sa conception. L'expérience utilisateur est affecté par ces cinq métriques. La persistance est critique à une application pour qu'on puisse accéder les mêmes données entre exécutions . En outre, les fonctionnalités et la persistance contribue aussi à l'expérience utilisateur et la convivialité.

[à compléter]

### Calcul des métriques
- Métriques obtenues via Moose
- Métriques calculées manuellement (méthode de calcul)

### Visualisation
- Captures d'écran des visualisations (Roassal, Excel, etc.)

### Analyse des éléments remarquables
- Identification des classes/modules/méthodes remarquables
- Rôle et importance de ces éléments
- Commentaires sur la qualité de la conception
- Points forts et points faibles

## Rapport et remise

- Démarche suivie pour chaque partie
- Lien du dépôt GitHub Pharo
- Liste des fichiers à remettre (.md, images, .json, .csv, code source ou document Excel/Google Sheets)

## Annexes

- Grille d’évaluation (copie ou résumé)
- Fichiers de configuration
- Autres documents utiles

---

> **Astuce** : Montrez des ébauches à votre enseignant pour obtenir des commentaires avant la remise finale.
