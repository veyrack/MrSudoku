# mrsudoku

Ce dépôt contient les sources du squelette pour le projet MrSudoku de l'UE 3I020 "programmation déclarative" de la licence d'informatique de Sorbonne Université.

Les sources sont copyright (C) 2019 Frédéric Peschanski et ne doivent pas être diffusées en dehors du cours.

Il s'agit d'un projet développé avec Clojurescript en [re-frame](https://github.com/Day8/re-frame).

## Développement du projet

La compilation du code CSS se faire de la façon suivante :

```
lein garden once
```

Pour lancer l'application:

```
lein build
```

(il faut parfois faire un `lein clean` au préalable)

L'application va tourner "en live" dans le navigateur.

Après un petit peu d'attente, ouvrez la page  [http://localhost:9500](http://localhost:9500).

Vous pouvez éditer le code Clojurescript en direct, la page web sera mise à jour automatiquement.
(en cas de problème sérieus, vous pouvez toujours refaire `lein build`).

**Remarque** : il n'est pas évident de synchroniser l'éditeur de code avec le navigateur.

Les tests sont lancés dans la page [http://localhost:9500/figwheel-extra-main/auto-testing](http://localhost:9500/figwheel-extra-main/auto-testing)

La première tâche à effectuer est de valider ces tests à 100%, et normalement le jeu de Sudoku devendra jouable.


