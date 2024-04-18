// utils/dbConnect.js

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default async function dbConnect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db(process.env.MONGODB_DB); 
  return { db, client };
}