__ASK QUESTIONS!!!__
# Reddit post full stack

__Time limit: 3h__ 

The goal of this test is to create a reddit homepage style list with a handful of posts that pull from a backend.

This is a test of skills that puts a very tough task into a short time window. The test is not that you finish, but rather you
do things properly under pressure. Obviously, finishing is a plus, but proper structure, code quality, and technique is what we are looking for.

## Goals
- Store a handful of reddit posts in a mongo collection and pull them into the UI using routes, controllers, and models.
- Build a reddit post card and list

## Setup

#### Downloading and setting up Mongodb
1. Install homebrew
2. `brew install mongodb`
3. sudo mkdir -p /data/db
4. sudo chmod -R go+w /data/db

### MongoDB
Start mongodb using the command:
```
mongod
```

#### Accessing mongo
Use Robo 3t to connect and view the DB.
__URL__
```
http://localhost:27017
```

---
### Frontend
The frontend is built using the react create app tool. It is vanilla react.
#### First time setup
```
npm install
npm start
```

#### Frameworks and Libraries
- React
---
### Backend
The backend is built using the hapi cli tool. There is a sample route, controller, and model that should help you get started: __`user`__. The __`policies`__ folder will not be used in this test.

#### First time setup
```
npm install
npm start
```

__NOTE__: use Postman to quickly build and test endpoints.

#### A step to help
You can use the file `postman_import.json` to import routes for `/user` to explore and test the sample API in `Postman`.

Post a user to the database and reference the user route, controller, and model example.

#### Frameworks and Libraries
- HapiJS
- Mongoose

# Submission
Please branch off of this repository and push your changes when done. Email confirmation, as well as the branch name, to the reviewer. Make sure it is within the timeframe given for the challange. 
