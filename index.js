const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// // GetScores
// apiRouter.get('/users', (_req, res) => {
//   res.send(users);
// });

// // SubmitScore
// apiRouter.post('/user', (req, res) => {
//   users = updateUsers(req.body, users);
//   res.send(users);
// });

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
