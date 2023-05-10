## Description

A simple NestJS (https://docs.nestjs.com/) project to start with clean-architecture. The projet was built according to the basic principles of clean-architecture.

This project allows to list / create / delete a "task".
The data is stored in a MongoDB database (https://www.mongodb.com/) and is exposed with a REST API.

## Folder structure
```bash
src
│   main.ts         # Entry point for application
└───core
└──────entities     # Entities
└──────use_cases    # Business logic
└───dataprovider
└──────database     # Interaction with database
                    # Service declaration implementing the 'TaskProvider'
└───entrypoint      # Controller generate the REST API
.env.temp           # Rename to '.env' and complete the parameters
test
└───core
└──────use_cases    # Unit test for use cases
```

## API
```bash
GET /api/todos    # List the tasks

POST /api/todos   # Create a task
{
  name,       # string
  completed   # boolean
}

DELETE /api/todos/:id # Delete a task
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm test
```

## Package and tools
* NestJS
* Fastify
* Mongoose
* Jest

#########################################################################
#########################################################################
#########################################################################

## Description

Un simple projet NestJS (https://docs.nestjs.com/) pour débuter avec la clean-architecture. Le projet a été construit selon les principes de base de la clean-architecture.

Ce projet permet de lister / créer / supprimer une "tache". 
Les données sont stockées dans une BDD MongoDB (https://www.mongodb.com/) et elles sont exposées via une API Rest.

## Structure des dossiers
```bash
src
│   main.ts         # Point d'entrée de l'application
└───core
└──────entites      # Entités
└──────use_cases    # Logique métier
└───dataprovider
└──────database     # Interaction avec la BDD 
                    # Déclaration du service implémentant le 'TaskProvider'
└───entrypoint      # Controlleur générant l'API REST
.env.temp           # A renommer en '.env' et compléter les paramètres
test
└───core
└──────use_cases    # Test unitaire des use cases
```

## API
```bash
GET /api/todos    # Liste les tâches 

POST /api/todos   # Création d'une tâche
{
  name,       # string
  completed   # boolean
}

DELETE /api/todos/:id # Suppression d'une tâche
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm test
```

## Package et outils 
* NestJS
* Fastify
* Mongoose
* Jest

