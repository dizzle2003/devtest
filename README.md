__ASK QUESTIONS!!!__
# Reddit post full stack

__Time limit: 2h__
__Discussion: 20m__

The goal of this test is to create a reddit homepage style list with a handful of posts that pull from a backend.

This is a test of skills that puts a very tough task into a short time window. The test is not that you finish, but rather you
do things properly under pressure. Obviously, finishing is a plus, but proper structure, code quality, and technique is what we are looking for.

## Goals
- Store a handful of reddit posts in a mongo collection and pull them into the UI using routes, controllers, and models.
- Build a reddit post card and list

## Setup

#### Downloading and setting up Mongodb
Follow the instructions for your OS [here](https://docs.mongodb.com/manual/administration/install-community/).
If you're on a mac, you may need to use a `dbpath` that is not in the root directory, eg. `~/data/db`.

### MongoDB
Start mongodb using the command:
```
mongod
```

#### Accessing mongo (optional)
Use Robo 3t to connect and view the DB.

---
### Frontend
The frontend is built using the React create app tool. It is vanilla React.
#### First time setup
```
npm install
npm start
```
This command should automatically open the web page `http://localhost:3000/`.

### Backend
The backend is built using the hapi cli tool. There is a sample route, controller, and model that should help you get started: __`user`__. The __`policies`__ folder will not be used in this test.

#### First time setup
```
npm install
npm start
```
This command should start the backend server on port `3001`.

#### A step to help
You can use the file `postman_import.json` to import routes for `/user` to explore and test the sample API in `Postman`.

Post a user to the database and reference the user route, controller, and model example.

#### Frameworks and Libraries
- HapiJS
- Mongoose

# Submission
Please branch off of this repository and create a pull request when you're done.  We will have a technical discussion afterwards about how you approach the problem.
