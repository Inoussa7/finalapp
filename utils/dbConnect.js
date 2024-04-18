// utils/dbConnect.js
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI);

export default async function dbConnect() {
  if (!client.isConnected()) await client.connect();
  return { db: client.db('dbname') };
}