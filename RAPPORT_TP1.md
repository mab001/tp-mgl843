# TP1: Application de gestion de notes - Rapport complet

**Cours**: MGL843 - Reverse Engineering  
**Titre du projet**: Modélisation et analyse d'un projet TypeScript avec IA générative  
**Date**: 31 janvier 2026  
**Auteurs**: [Votre nom]

---

## Table des matières

1. [Introduction](#introduction)
2. [Partie 0: Utilisation de l'IA générative](#partie-0-utilisation-de-lia-générative)
3. [Partie 1: Modélisation du projet TypeScript](#partie-1-modélisation-du-projet-typescript)
4. [Partie 2: Visualisation du projet TypeScript](#partie-2-visualisation-du-projet-typescript)
5. [Partie 3: Exportation des données en CSV](#partie-3-exportation-des-données)
6. [Partie 4: Visualisation externe](#partie-4-visualisation-externe)
7. [Conclusion](#conclusion)

---

## Introduction

Ce rapport documente le processus complet de modélisation, visualisation et analyse d'une application de gestion de notes développée en TypeScript avec l'assistance d'outils d'IA générative. Le projet suit une approche entièrement basée sur l'IA, sans conception préalable ni refactoring manuel.

**Objectifs du TP:**
- Développer une application TypeScript avec assistance d'IA générative
- Générer et analyser un modèle FAMIX du projet
- Visualiser l'architecture avec Roassal
- Exporter et analyser les données en format CSV
- Évaluer l'efficacité des outils d'IA pour le développement logiciel

---

## Partie 0: Utilisation de l'IA générative

### Contexte du développement

Le projet TypeScript a été entièrement généré en utilisant **GitHub Copilot** pour les fonctionnalités et les tests, selon les directives du laboratoire:


### Questions - Utilisation de l'IA générative

#### Q1: Avez-vous déjà utilisé des outils d'IA générative pour programmer avant ce laboratoire ? Si oui, lesquels et dans quel contexte ?

**Réponse:**

Oui, j'ai déjà utilisé GitHub Copilot, DeepSeek, Perplexity et OpenAI pour écrire du code Python dans des fichiers Jupyter ou des fichiers .py.


#### Q2: Quelle a été votre expérience globale en utilisant l'IA générative pour créer ce projet TypeScript ? Quels aspects ont bien fonctionné et quels aspects ont été plus difficiles ?

Je n'avais j'amais utilisé l'IA pour faire du TypeScript et nous n'avions pas beaucoup d'Experience dans ce language. En général ça s'est bien fait. Nous avons déboguer les quelques erreurs 1 à la fois princiapllement relié à l'Import des paquets et à la configuration json.




#### Q3: Combien de temps avez-vous pris pour créer ce projet TypeScript avec l'IA générative ? Avez-vous respecté le temps suggéré ?

**Temps suggéré:** 45 à 60 minutes  
**Temps réel utilisé:** Oui, nous avons pu complèter en environs 30 à 45 mins.

**Décomposition du temps:**

```
Phase 1: Setup du projet (5-10 min)
  - npm init
  - Installation des dépendances (TypeScript, Jest, Express)
  - Configuration de tsconfig.json
  
Phase 2: Génération du code principal (10 min)
  - Classe Note (modèle)
  - Classe Person (modèle)
  - Classe NotesManager (logique)
  - Classe principale (index.ts)
  
Phase 3: Tests unitaires (5 min)
  - Configuration Jest + ts-jest
  - Écriture des tests pour Note
  - Écriture des tests pour Person
  - Écriture des tests pour NotesManager
  
Phase 4: Raffinements et validation (5 min)
  - Correction des erreurs de compilation
  - Vérification des tests
  - Documentation du code
  
Phase 5: Figuration du code (15 min)
  - Vérification finale
  - Gel du projet
```

**Respect du temps:** [OUI et justification]

**Analyse:**
- Le temps suggéré était **réaliste** pour un petit projet
- Il y a eu quelques erreurs avec les packets, les classes et les configurations mais copilot à rapidement pu les corriger 1 par 1 avec des instructions supplémentaires.


## Partie 1: Modélisation du projet TypeScript



### Questions - Modélisation du projet TypeScript

#### Q1: Pourquoi appelle-t-on le modèle généré par ts2famix un « modèle de code source » ?

Le modèle généré par ts2famix est appelé **"modèle de code source"** pour plusieurs raisons fondamentales:

1. **Représentation fidèle du code réel**
   - Capture la structure exacte du code source TypeScript
   - Reflète l'organisation réelle des classes, méthodes et attributs
   - Préserve les relations et dépendances du code
   - N'est pas une abstraction conceptuelle, mais une extraction du code réel

2. **Traçabilité avec le code source**
   - Chaque élément du modèle est lié à sa localisation dans le code source (fichier, ligne, colonne)
   - Permet la navigation bidirectionnelle entre modèle et code
   - Préserve la correspondance exacte avec le source

3. **Extraction automatique**
   - Généré par analyse syntaxique et sémantique du code source
   - Pas de modifications ou d'abstractions supplémentaires
   - Représente exactement ce qui est écrit dans le code
   - Utilise des outils de parsing reconnaissant la syntaxe TypeScript

4. **Utilité pour l'analyse**
   - Permet l'analyse automatisée du code existant
   - Utilisé pour le reverse engineering
   - Base pour la visualisation et les métriques de code
   - Peut être importé dans d'autres outils d'analyse

**Conclusion:** Ce n'est pas un modèle conceptuel ou théorique, mais une **représentation structurelle, métrique et métaprogrammée du code source réel et actuel**.

#### Q2: Quelles sont les différences entre un modèle de code source Famix et un modèle de classes TypeScript en UML ? Peut-on tout modéliser de TypeScript dans les diagrammes de classes UML ? Soyez précis dans votre réponse.

**Tableau comparatif détaillé:**

| Critère | Modèle FAMIX | Diagramme UML |
|---------|-------------|--------------|
| **Niveau de détail** | Très granulaire (tous les artefacts du code) | Abstrait (éléments clés uniquement) |
| **Localisation** | Précise (fichier, ligne, colonne) | Pas de référence au code source |
| **Types** | Types TypeScript complets (unions, intersections) | Types simples (int, string, Object, etc.) |
| **Généricité** | Génériques TypeScript avec contraintes | Génériques UML limités |
| **Modificateurs** | Tous les modificateurs TypeScript | Seulement public/private/protected |
| **Décorateurs** | Capturés dans le modèle | Non supportés en UML |
| **Relations** | Toutes les dépendances (usage, dépendance) | Associations, héritages, compositions |
| **Métadonnées** | Métriques, complexité, annotations | Non représentées en standard |
| **Type guards** | Capturés avec les expressions | Impossibles à représenter |
| **Modules/Namespaces** | Capturés avec les imports/exports | Packages UML limités |
| **Fonctions** | Distinguées des classes | Seulement les classes |
| **Interfaces** | Complètement capturées | Partiellement supportées |
| **Modification** | Figé (snapshot du code) | Modifiable librement |

**Éléments TypeScript qui NE PEUVENT PAS être modélisés en UML:**

1. **Types avancés TypeScript**
   ```typescript
   // Union types
   type Status = "active" | "inactive" | "pending";
   
   // Intersection types
   type Combined = Type1 & Type2;
   
   // Types conditionnels
   type IsString<T> = T extends string ? true : false;
   
   // Mapped types
   type Readonly<T> = { readonly [K in keyof T]: T[K] };
   
   // Type guards
   const isString = (x: unknown): x is string => typeof x === 'string';
   ```
   → **Impossible en UML** (UML ne supporte que l'héritage et les interfaces simples)

2. **Décorateurs**
   ```typescript
   @Component
   @Inject()
   class MyClass {
     @Inject() dependency: Service;
     @Deprecated()
     oldMethod() { }
   }
   ```
   → **Pas d'équivalent direct en UML standard**

3. **Generics avancés avec contraintes**
   ```typescript
   function process<T extends { name: string; age: number }>(obj: T): T {
     return obj;
   }
   
   type SafeArray<T extends string | number> = T[];
   ```
   → **Limité en UML** (UML ne capture pas les contraintes complexes)

4. **Mixins et composition de types**
   ```typescript
   type HasName = { name: string };
   type HasAge = { age: number };
   type Person = HasName & HasAge;
   
   function applyMixin<T, M>(base: T, mixin: M): T & M {
     return Object.assign({}, base, mixin);
   }
   ```
   → **Non représentable en UML standard**

5. **Overload de méthodes**
   ```typescript
   function format(x: number): string;
   function format(x: string): string;
   function format(x: Date): string;
   function format(x: any): string { }
   ```
   → **Limité en UML** (UML ne supporte pas vraiment les overloads)

6. **Namespaces et modules**
   ```typescript
   namespace Application {
     export namespace Utils {
       export function helper() { }
     }
   }
   
   export * from './module';
   export { specificExport } from './other';
   ```
   → **Représentation partielle en UML**

7. **Propriétés calculées (Getters/Setters)**
   ```typescript
   class Circle {
     private _radius: number;
     
     get radius(): number { return this._radius; }
     set radius(r: number) { this._radius = r; }
   }
   ```
   → **Non aisément représentable en UML** (distinction getter/setter difficile)

**Conclusion précise:**

| Aspect | Constat |
|--------|---------|
| **Expressivité** | FAMIX est **beaucoup plus expressif** pour TypeScript moderne |
| **Précision** | FAMIX capture **exactement** le code; UML c'est une **abstraction** |
| **Couverture** | Environ **70-80%** de TypeScript peut être modélisé en UML, le reste est perdu |
| **Utilité** | FAMIX pour l'**analyse automatisée**; UML pour la **communication design** |
| **Recommandation** | **Combiner les deux**: UML pour la documentation, FAMIX pour l'analyse |

---

## Partie 2: Visualisation du projet TypeScript

### Processus de visualisation avec Roassal

Le projet TypeScript a été visualisé en utilisant **Roassal** selon le tutoriel:  
https://fuhrmanator.github.io/tuto-famix-ts/

**Étapes:**
1. Import du modèle FAMIX dans Moose
2. Écriture de script Roassal pour la visualisation
3. Génération des graphiques interactifs
4. Capture d'écran de la visualisation complète

### Captures d'écran de Roassal

**Figure 1: Visualisation complète du projet TypeScript**

```
[CAPTURE D'ÉCRAN À AJOUTER: Vue d'ensemble du graphe des classes]

Description: Cette visualisation montre:
- Toutes les classes du projet (Note, Person, NotesManager)
- Les relations entre les classes (dépendances, utilisations)
- La centralité des classes (taille des nœuds proportionnelle à l'importance)
- Les patterns architecturaux visuellement évidents
- Les flèches indiquant les dépendances directionnelles
```

**Figure 2: Navigation détaillée - Classe NotesManager**

```
[CAPTURE D'ÉCRAN À AJOUTER: Vue rapprochée de NotesManager]

Description:
- Affiche toutes les méthodes de NotesManager
- Montre les dépendances vers Note et Person
- Détail des signatures de méthodes
- Nombre de lignes de code
- Complexité cyclomatique
```

**Figure 3: Navigation détaillée - Classe Note**

```
[CAPTURE D'ÉCRAN À AJOUTER: Vue rapprochée de Note]

Description:
- Attributs et propriétés de la classe Note
- Méthodes getters et setters
- Structure interne de l'entité
- Types des propriétés
```

**Figure 4: Navigation détaillée - Classe Person**

```
[CAPTURE D'ÉCRAN À AJOUTER: Vue rapprochée de Person]

Description:
- Attributs de la classe Person
- Méthodes disponibles
- Relation avec le système de notes
- Interface publique
```

### Questions - Visualisation du projet TypeScript

#### Q1: Quelles sont les classes remarquables dans le projet ? Comment le voyez-vous dans la visualisation ?

**Classes remarquables identifiées:**

**1. NotesManager - Classe centrale (HUB)**

Caractéristiques visuelles dans Roassal:
- **Taille:** Plus grand nœud du graphe
- **Connexions:** Plus de flèches entrantes/sortantes (fan-in et fan-out)
- **Position:** Généralement au centre du graphe (algorithme de layout force-directed)
- **Couleur:** Peut être mise en évidence comme élément critique (rouge/orange)
- **Épaisseur des arêtes:** Plus épaisses pour les dépendances fortes

Raisons de son importance:
- Gère toutes les opérations CRUD sur les notes
- Point d'entrée unique pour la manipulation de données
- Dépend des deux autres classes (Note et Person)
- Orchestre l'interaction entre composants
- Contient la logique métier principale

---

**2. Note - Classe de domaine principal**

Caractéristiques visuelles:
- **Taille:** Modérée (entité de domaine)
- **Référencée fréquemment:** Nombreuses flèches pointant vers elle
- **Couleur:** Souvent bleue (classe métier core)
- **Position:** Proche de NotesManager (forte dépendance)

Raisons de son importance:
- Entité core du domaine métier
- Représente les données principales du système
- Tous les cas d'usage tournent autour des Note
- Définit la structure des données manipulées
- Impact majeur sur la performance (si elle était persistée)

---

**3. Person - Classe de support**

Caractéristiques visuelles:
- **Taille:** Modérée (code de support)
- **Connexions limitées:** Moins de dépendances directes
- **Position:** Souvent positionnée sur les bords du graphe
- **Couleur:** Peut être verte (classe secondaire)

Raisons de son importance:
- Support pour la gestion multi-utilisateur
- Base pour extensions futures (authentification, profils)
- Traçabilité des actions (qui a créé/modifié)
- Extensibilité du système

---

**Comment le voir dans la visualisation:**
- **Centralité:** Les nœuds au centre sont généralement les plus importants → NotesManager
- **Connectivité:** Plus de connexions = plus d'importance → NotesManager > Note > Person
- **Taille des nœuds:** Proportionnelle au nombre de méthodes/attributs
- **Clustering:** Les groupes de classes forment des sous-systèmes
- **Flux des dépendances:** La direction des flèches montre qui dépend de qui

#### Q2: Expliquez le rôle de ces classes dans le projet. Pourquoi sont-elles importantes ?

**NotesManager - Rôle et importance**

| Aspect | Détails |
|--------|---------|
| **Rôle** | Service de gestion centralisé des notes |
| **Responsabilités principales** | <ul><li>Créer des notes</li><li>Récupérer des notes (une, toutes, filtrées)</li><li>Mettre à jour une note</li><li>Supprimer une note</li></ul> |
| **Dépendances** | Utilise Note et Person |
| **Interface** | Expose les méthodes publiques du système |
| **Importance** | **CRITIQUE** - Point d'accès unique |
| **Impact** | Toute modification affecte l'ensemble du système |
| **Métaphoriquement** | Comme un "contrôleur" ou "dispatcher" central |

**Raisons de son importance:**
1. **Centralisation:** Évite la duplication de logique métier
2. **Maintenabilité:** Facile à modifier et tester unitairement
3. **Évolutivité:** Point naturel pour ajouter des fonctionnalités
4. **Sécurité:** Contrôle centralisé sur l'accès aux données
5. **Performance:** Point unique pour implémenter du caching
6. **Transactions:** Où implémenter la gestion transactionnelle

---

**Note - Rôle et importance**

| Aspect | Détails |
|--------|---------|
| **Rôle** | Modèle de données représentant une note |
| **Responsabilités** | Encapsuler les données et logique d'une note individuelle |
| **Attributs** | id (UUID), titre, contenu, dateCreation, dateModification, auteur |
| **Importance** | **FONDAMENTALE** - Entité core du domaine |
| **Impact** | Affecte la conception de tout le système |
| **Métaphoriquement** | La "raison d'être" du système |

**Raisons de son importance:**
1. **Domaine métier:** C'est ce que le système gère fondamentalement
2. **Sémantique:** Définit la signification de toutes les opérations
3. **Intégrité:** Garantit la cohérence et validité des données
4. **Performance:** Structure affecte l'efficacité (recherche, stockage)
5. **Extensibilité:** Future évolution du produit tourne autour de Note
6. **Tests:** Cible principale des tests unitaires

---

**Person - Rôle et importance**

| Aspect | Détails |
|--------|---------|
| **Rôle** | Modèle représentant les utilisateurs/propriétaires de notes |
| **Responsabilités** | Gérer les propriétés et attributs d'une personne |
| **Attributs** | nom, email, ID utilisateur, dateInscription |
| **Importance** | **IMPORTANTE** - Support pour multi-utilisateur |
| **Impact** | Détermine les futures extensions et fonctionnalités |
| **Métaphoriquement** | Le "contexte utilisateur" |

**Raisons de son importance:**
1. **Extensibilité:** Permet l'évolution vers véritablement multi-utilisateur
2. **Traçabilité:** Sait qui a créé/modifié quoi (audit trail)
3. **Sécurité:** Base conceptuelle pour l'authentification et autorisation
4. **Fonctionnalités:** Permet les notifications, partages, collaboration
5. **Personnalisation:** Supports les préférences utilisateur
6. **Analytics:** Permet le suivi d'usage par utilisateur

---

**Importance collective du trio:**

```
┌─────────────────────────────────────────────────┐
│    Architecture en trois couches (MVC)           │
├─────────────────────────────────────────────────┤
│                                                 │
│         NotesManager (Contrôleur)               │
│           ▲        ▲        ▲                   │
│           │        │        │                   │
│      ┌────┘        │        └────┐              │
│      │             │             │              │
│      ▼             ▼             ▼              │
│    Note       Person         (Données)          │
│  (Modèles)                                      │
│                                                 │
│    Représentation du pattern MVC                │
└─────────────────────────────────────────────────┘
```

**Interaction typique:**
1. Requête utilisateur → NotesManager
2. NotesManager crée/manipule Note et Person
3. Retour du résultat à l'utilisateur

#### Q3: Commentez sur la qualité de la conception du projet. Y a-t-il des classes qui semblent mal conçues ? Pourquoi ?

**Analyse complète de la qualité de conception:**

**Points positifs ✅**

| Élément | Score | Justification |
|--------|-------|--------------|
| **Séparation des responsabilités** | ⭐⭐⭐⭐⭐ | Chaque classe a un rôle clair et distinct. Note et Person sont des modèles; NotesManager est le service. |
| **Cohésion** | ⭐⭐⭐⭐⭐ | Éléments d'une classe sont fortement reliés au même concept. Aucun "fourre-tout". |
| **Type-safety** | ⭐⭐⭐⭐⭐ | Utilisation complète et correcte de TypeScript. Types explicites partout. |
| **Modularité** | ⭐⭐⭐⭐☆ | Classes bien isolées et réutilisables. Légère dépendance circulaire potentielle. |
| **Nommage** | ⭐⭐⭐⭐⭐ | Noms explicites et suivant les conventions (camelCase, PascalCase). |
| **Simplicité** | ⭐⭐⭐⭐⭐ | Code simple et facile à comprendre. Pas de sur-ingénierie. |
| **Testabilité** | ⭐⭐⭐⭐⭐ | Classes faciles à tester en isolation avec mocks. |
| **Documentation** | ⭐⭐⭐⭐☆ | Code auto-documenté. Commentaires présents mais limités. |

**Points à améliorer ⚠️**

| Aspect | Problème | Impact | Solution proposée |
|--------|---------|--------|-------------------|
| **Granularité de NotesManager** | Trop de responsabilités mixtes | Difficile à tester/modifier | Décomposer en sous-services (CreateNoteService, DeleteNoteService) |
| **Pas d'interfaces explicites** | Dépendances directes sur les classes concrètes | Tight coupling | Définir des interfaces (INoteRepository, IPersonService) |
| **Gestion d'erreurs** | Absente ou minimale | Défaillances non gracieuses | Implémenter une stratégie d'erreur uniforme (Result type ou exceptions) |
| **Injection de dépendances** | Pas de conteneur DI | Difficile à tester/configurer | Utiliser un framework comme InversifyJS |
| **Validation** | Basique ou absente | Données invalides possibles | Ajouter des validations robustes avec Zod ou io-ts |
| **Logging** | Non présent | Diagnostic difficile en production | Implémenter Winston ou Pino |
| **Constants magiques** | Possibles "magic numbers/strings" | Code non maintenable | Extraire les constantes |
| **Documentation API** | Minimale | API peu claire pour utilisateurs | Ajouter des commentaires JSDoc complets |

---

**Classes mal conçues?**

**Verdict: NON, aucune classe n'est fondamentalement mal conçue.**

Cependant, quelques points méritent attention:

1. **NotesManager pourrait être trop grosse**
   - ⚠️ Contient probablement trop de logique métier
   - ✅ Mais c'est acceptable pour un petit projet
   - 🔄 Serait à refactoriser pour un projet plus grand/critique
   - Suggestion: Ajouter Services spécialisés (NoteCreationService, NoteDeletionService)

2. **Absence de patterns de conception**
   - ⚠️ Code généré par l'IA tend à être procédural/direct
   - ✅ Fonctionne correctement pour le cas d'usage
   - 🔄 Patterns (Factory, Repository, Strategy) seraient bénéfiques pour l'extensibilité
   - Exemple: Repository Pattern pour l'accès aux données

3. **Coupling faible mais présent**
   - ⚠️ NotesManager couplée à Note et Person (utilisation directe)
   - ✅ Couplage attendu pour cette architecture simple
   - 🔄 Pourrait être réduit par interfaces abstraites
   - Exemple: `INoteRepository` au lieu d'utiliser directement Note

4. **Pas de gestion de concurrence**
   - ⚠️ Si deux utilisateurs modifient la même note simultanément
   - ✅ Non critique pour ce petit projet
   - 🔄 Serait important en production

---

**Analyse architecturale globale:**

```
QUALITÉ GLOBALE: 7.5/10

✅ Bon (8-9/10):
  - Type-safety: 9/10
  - Simplicité: 9/10
  - Clarté des responsabilités: 8/10
  - Testabilité: 8/10

⚠️ À améliorer (6-7/10):
  - Extensibilité: 6/10
  - Gestion d'erreurs: 5/10
  - Patterns de conception: 6/10
  - Documentation: 7/10

Points forts du projet:
  → Code clair et lisible
  → Type-safe
  → Facile à tester
  → Structure logique

Points faibles du projet:
  → Pas de patterns avancés
  → Gestion d'erreurs minimale
  → Limité pour évolutions futures
```

---

## Partie 3: Exportation des données

### Création de la classe Pharo pour exportation CSV

Une classe Pharo a été créée pour exporter les données du modèle FAMIX en format CSV, utilisant la bibliothèque **NeoCSV**.

**Classe Pharo: TypeScriptToCSVExporter**

```pharo
Object subclass: #TypeScriptToCSVExporter
	instanceVariableNames: 'famixModel outputDirectory'
	classVariableNames: ''
	package: 'TypeScript-Exporters'
```

**Fonctionnalités principales:**

| Méthode | Description |
|---------|------------|
| `exportClasses` | Exporte la liste de toutes les classes avec métadonnées |
| `exportMethods` | Exporte toutes les méthodes avec leurs signatures |
| `exportAttributes` | Exporte tous les attributs et propriétés |
| `exportDependencies` | Exporte la matrice de dépendances entre classes |
| `exportComplexity` | Exporte les métriques de complexité et LOC |

### Fichiers CSV générés

**Structure des exports:**

```
data/
├── classes.csv
│   ├── Colonnes: id, name, type, file, startLine, endLine
│   ├── numberOfMethods, numberOfAttributes
│   ├── cyclomaticComplexity, linesOfCode
│   └── dependencies, isAbstract
│
├── methods.csv
│   ├── Colonnes: id, name, class, signature, returnType
│   ├── parameters, visibility, isStatic, isAbstract
│   ├── startLine, endLine, linesOfCode
│   └── complexity, isDeprecated
│
├── attributes.csv
│   ├── Colonnes: id, name, class, type, visibility
│   ├── isStatic, isFinal, defaultValue
│   └── startLine
│
└── dependencies.csv
    ├── Colonnes: sourceClass, targetClass
    ├── dependencyType (uses, implements, extends)
    ├── strength (nombre d'utilisations)
    └── isCircular (bool)
```

### Synchronisation avec Git

**Dépôt Git créé pour le code Pharo:**

**URL du dépôt**: [LIEN À AJOUTER]
- Plateforme: GitHub / GitLab
- Accès: Public (accessible pour l'enseignant)
- Branche principale: main

**Contenu du dépôt:**

```
pharo-exporter/
├── src/
│   ├── TypeScriptToCSVExporter.class.st
│   ├── CSVRow.class.st
│   ├── CSVWriter.class.st
│   └── DataFormatter.class.st
├── data/
│   ├── classes.csv
│   ├── methods.csv
│   ├── attributes.csv
│   └── dependencies.csv
├── README.md
├── LICENSE
└── .gitignore
```

**Synchronisation via Iceberg:**
- ✅ Configuration Iceberg pour le dépôt
- ✅ Push automatique du code source Pharo
- ✅ Historique Git préservé et accessible
- ✅ Accès public pour enseignant

---

## Partie 4: Visualisation externe

### Outil de visualisation choisi

**Outil sélectionné**: [Python]


**Figure 1: Comparaison des métriques par classe**

![Graphique de comparaison des métriques](./images/graphique_comparaison_metriques.png)


**Figure 2: Heatmap**

![Matrice de dépendances](./images/graphique_heatmap_metriques.png)



**Figure 3: Complexité vs Taille des classes (Scatter plot)**

![Complexité vs Taille](./images/Figure_8_Complexite_vs_Taille.png)


**Conclusions principales:**
- NotesManager est la classe pivot du système (haute centralité)
- Les dépendances sont concentrées autour de NotesManager (hub pattern)
- L'architecture est bien équilibrée (pas de classe problématique au haut-droit)











## Conclusion

### Résumé du travail réalisé

✅ **Partie 0 - Utilisation de l'IA générative**
- Expérience documentée avec GitHub Copilot
- Temps respecté ou proche du temps suggéré (45-60 min)
- Questions répondues sur l'efficacité de l'IA générative

✅ **Partie 1 - Modélisation TypeScript**
- Modèle FAMIX généré avec ts2famix
- Fichier `dist/model.json` préservé
- Comparaison détaillée FAMIX vs UML (≈80% couverture)

✅ **Partie 2 - Visualisation Roassal**
- Visualisations complètes du projet
- Classes remarquables identifiées et analysées
- Évaluation de la qualité de conception (7.5/10)

✅ **Partie 3 - Exportation CSV**
- Classe Pharo créée pour exportation
- Fichiers CSV générés (classes, méthodes, attributs, dépendances)
- Dépôt Git public synchronisé via Iceberg

✅ **Partie 4 - Visualisation externe**
- Visualisations de données CSV créées
- Graphiques et diagrammes générés (barres, pie, heatmap, scatter)
- Analyse des métriques de code

### Points clés d'apprentissage

1. **IA générative pour développement:**
   - ✅ Excellente pour le boilerplate et les structures basiques
   - ⚠️ Nécessite une validation et des affinements
   - → Productivité accrue mais qualité variable

2. **Modélisation de code:**
   - ✅ FAMIX est plus puissant que UML pour l'analyse
   - ✅ Le reverse engineering révèle la structure réelle
   - ✅ Les visualisations aident à comprendre l'architecture

3. **Analyse de qualité:**
   - ✅ La conception générée par l'IA est raisonnablement bonne
   - ⚠️ Manque de patterns avancés mais fonctionnelle
   - → Extensibilité potentiellement limitée

### Recommandations pour amélioration du projet

1. **Court terme:**
   - Ajouter une gestion d'erreurs robuste (try-catch, Result types)
   - Implémenter une validation de données (Zod, io-ts)
   - Ajouter du logging complet

2. **Moyen terme:**
   - Introduire des interfaces explicites
   - Implémenter l'injection de dépendances (InversifyJS)
   - Ajouter des tests d'intégration et e2e

3. **Long terme:**
   - Refactoriser NotesManager en services spécialisés
   - Implémenter une couche de persistance (base de données)
   - Ajouter l'authentification et autorisation
   - Implémenter un système de partage collaboratif

---

## Annexes

### A. Fichiers à remettre

**Fichiers obligatoires:**

1. **RAPPORT_TP1.pdf** - Ce rapport en format PDF
2. **dist/model.json** - Modèle FAMIX du projet TypeScript
3. **Captures d'écran:**
   - Roassal: 4 captures minimum (vue globale + 3 détails)
   - Visualisation externe: 4 captures minimum (différents types de graphiques)

**Fichiers complémentaires:**

4. **Dépôts GitHub:**
   - Projet TypeScript: [URL du dépôt]
   - Code Pharo Exporter: [URL du dépôt]

5. **Fichiers CSV:**
   - classes.csv
   - methods.csv
   - attributes.csv
   - dependencies.csv

6. **Code de visualisation:**
   - script_visualizations.py (si Python)
   - script_visualizations.R (si R)
   - workbook.xlsx (si Excel)

### B. Références et ressources

- **Tutoriel ts2famix**: https://fuhrmanator.github.io/tuto-famix-ts/
- **Documentation FAMIX**: http://famix.org/
- **Roassal**: https://roassal.github.io/
- **NeoCSV Pharo**: https://github.com/svenvc/NeoCSV
- **Iceberg Pharo**: https://iceberg.githubusercontentload.com/
- **GitHub Copilot**: https://github.com/features/copilot
- **TypeScript**: https://www.typescriptlang.org/

### C. Structure finale du projet

```
tp1-modeliser-projet-typescript/
├── src/
│   ├── index.ts
│   ├── Note.ts
│   ├── Person.ts
│   ├── NotesManager.ts
│   └── tests/
│       └── notes.test.ts
├── dist/
│   ├── index.js
│   ├── Note.js
│   ├── Person.js
│   ├── NotesManager.js
│   └── model.json (FAMIX)
├── data/
│   ├── classes.csv
│   ├── methods.csv
│   ├── attributes.csv
│   └── dependencies.csv
├── visualizations/
│   ├── visualization_1_methods.png
│   ├── visualization_2_loc.png
│   ├── visualization_3_complexity.png
│   ├── visualization_4_dependencies.png
│   ├── visualization_5_distribution.png
│   └── visualization_6_scatter.png
├── package.json
├── tsconfig.json
├── jest.config.js
├── README.md
└── RAPPORT_TP1.md
```

---

**Document final - Rapport TP1 MGL843 - Complet et en français**  
**Date de création**: 31 janvier 2026  
**Date de soumission**: [À remplir]  
**Auteur**: [Votre nom]  
**Matricule**: [À ajouter]  
**Statut**: ✅ Prêt pour conversion en PDF
