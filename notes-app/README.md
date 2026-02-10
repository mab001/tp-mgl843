Prompt utilisé pour créer le frontend et apporter les changements nécessaire pour qu'il connecte au .json contenant les données :

Crée un frontend moderne (HTML/JS) pour une application de gestion de notes. Le frontend doit :

- Afficher une liste de notes récupérées depuis le backend via l’API GET http://localhost:3000/notes
- Permettre d’ajouter une note via l’API POST http://localhost:3000/notes (title, content, tags)
- Permettre de rechercher des notes via l’API GET http://localhost:3000/notes?q=search
- Gérer les erreurs de connexion (CORS, backend non disponible)
- Utiliser fetch pour toutes les requêtes
- Afficher les messages d’erreur ou de succès
- Utiliser un formulaire pour ajouter une note
- Mettre à jour la liste après ajout ou recherche
- Assure-toi que les URLs pointent vers http://localhost:3000 et que le backend accepte les requêtes cross-origin (CORS). Ajoute des commentaires pour expliquer chaque partie du code.