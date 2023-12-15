const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('../dbConfig.json');

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
//async function createUser(email, password) {
async function createUser(user) {

// Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(user.password, 10);

  const nUser = {
    username: user.username,
    password: passwordHash,
    first_name: user.first_name,
    last_name: user.last_name,
    school: user.school,
    buddies: user.buddies,
    messages: user.messages,
    token: uuid.v4(),
  };
  await usersCollection.insertOne(nUser);

  return nUser;
}

function getUsers() {
  const cursor = usersCollection.find();
  return cursor.toArray();
}

function getUser(username) {
  return usersCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return usersCollection.findOne({ token: token });
}

async function updateUser(user) {
  const filter = {username: user.username};
  const update = {$set : {buddies: user.buddies, messages: user.messages}};

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

function getGroup(groupname) {
  return groupsCollection.findOne({ name: groupname });
}

async function updateGroup(group) {
  const filter = {name: group.name};
  const update = {$set : {members: group.members}};

  const result = await groupsCollection.updateOne(filter, update);
  return result;
}

module.exports = { 
  addUser, 
  getUsers, 
  addGroup, 
  getGroups, 
  updateUser, 
  updateGroup, 
  createUser,
  getUserByToken,
  getUser,
  getGroup 
};