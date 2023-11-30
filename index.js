const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.get('/users', async (_req, res) => {
  const users = await DB.getUsers(); 
  res.send(users);
});

apiRouter.post('/users', async (req, res) => {
  DB.addUser(req.body);
  //const users = await DB.getUsers();
  //res.send(users);
});

apiRouter.get('/groups', async (_req, res) => {
  const groups = await DB.getGroups(); 
  res.send(groups);
});

apiRouter.post('/groups', async (req, res) => {
  DB.addGroup(req.body);
  //const users = await DB.getUsers();
  //res.send(users);
});


apiRouter.get('/messages', (_req, res) => {
  res.send(messages);
});

apiRouter.post('/message', (req, res) => {
  messages = updateUsers(req.body, messages);
  res.send(messages);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let messages = []
function updateUsers(newMessage, messages) {
  messages.push(newMessage);

  return messages;
}


/*
const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.get('/messages', (_req, res) => {
  res.send(messages);
});

apiRouter.post('/message', (req, res) => {
  messages = updateUsers(req.body, messages);
  res.send(messages);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let messages = []
function updateUsers(newMessage, messages) {
  messages.push(newMessage);

  return messages;
}

*/