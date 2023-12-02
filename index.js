const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
//    const user = await DB.createUser(req.body.username, req.body.password);
    const user = await DB.createUser(req.body);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

apiRouter.get('/user/:username', async (req, res) => {
  const user = await DB.getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});



secureApiRouter.get('/users', async (_req, res) => {
  const users = await DB.getUsers(); 
  res.send(users);
});

secureApiRouter.post('/users', async (req, res) => {
  await DB.addUser(req.body);
  const users = await DB.getUsers();
  res.send(users);
});

secureApiRouter.put('/users', async (req, res) => {
  console.log("DID IT MAKE IT")
  DB.updateUser(req.body);
  const users = await DB.getUsers();
  res.send(users);
});

secureApiRouter.get('/groups', async (_req, res) => {
  const groups = await DB.getGroups(); 
  res.send(groups);
});

secureApiRouter.post('/groups', async (req, res) => {
  await DB.addGroup(req.body);
  const groups = await DB.getGroups();
  res.send(groups);
});

secureApiRouter.put('/groups', async (req, res) => {
  console.log("DID IT MAKE IT")
  DB.updateGroup(req.body);
  const groups = await DB.getGroups();
  res.send(groups);
});

/*
apiRouter.get('/messages', (_req, res) => {
  res.send(messages);
});

apiRouter.post('/message', (req, res) => {
  messages = updateUsers(req.body, messages);
  res.send(messages);
});
*/

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*
let messages = []
function updateUsers(newMessage, messages) {
  messages.push(newMessage);

  return messages;
}
*/

/*
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);


apiRouter.get('/users', async (_req, res) => {
  const users = await DB.getUsers(); 
  res.send(users);
});

apiRouter.post('/users', async (req, res) => {
  DB.addUser(req.body);
  const users = await DB.getUsers();
  res.send(users);
});

apiRouter.put('/users', async (req, res) => {
  console.log("DID IT MAKE IT")
  DB.updateUser(req.body);
  const users = await DB.getUsers();
  res.send(users);
});

apiRouter.get('/groups', async (_req, res) => {
  const groups = await DB.getGroups(); 
  res.send(groups);
});

apiRouter.post('/groups', async (req, res) => {
  DB.addGroup(req.body);
  const groups = await DB.getGroups();
  res.send(groups);
});

apiRouter.put('/groups', async (req, res) => {
  console.log("DID IT MAKE IT")
  DB.updateGroup(req.body);
  const groups = await DB.getGroups();
  res.send(groups);
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
*/