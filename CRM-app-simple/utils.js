require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');

const mongo_username = process.env.MONGNO_USERNAME
const mongo_password = process.env.MONGNO_USERNAME

const uri = `mongodb+srv://${mongo_username}:${mongo_password}@crm-app-d77d5e503ad1439.sdn73bl.mongodb.net/?retryWrites=true&w=majority`;

module.exports = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

