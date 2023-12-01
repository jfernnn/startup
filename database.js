const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const usersCollection = db.collection('users');
const groupsCollection = db.collection('groups');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addUser(user) {
  const result = await usersCollection.insertOne(user);
  return result;
}

function getUsers() {
  const cursor = usersCollection.find();
  return cursor.toArray();
}

async function updateUser(user) {
  const filter = {username: user.username};
  const update = {$set : {buddies: user.buddies}};

  const result = await usersCollection.updateOne(filter, update);
  return result;
}

async function addGroup(group) {
    const result = await groupsCollection.insertOne(group);
    return result;
}
  
function getGroups() {
    const cursor = groupsCollection.find();
    return cursor.toArray();
}

async function updateGroup(group) {
  const filter = {name: group.name};
  const update = {$set : {members: group.members}};

  const result = await groupsCollection.updateOne(filter, update);
  return result;
}

module.exports = { addUser, getUsers, addGroup, getGroups, updateUser, updateGroup };
