import mongoose from 'mongoose';
import { Client } from 'pg';
import { createPool } from '@vercel/postgres';
import { Pool } from 'pg';


// MongoDB connection
let mongoConnection = null;

export async function connectMongoDB() {
    mongoose.set('strictQuery', true);

    if (mongoConnection) {
        console.log('MongoDB is already connected');
        return mongoConnection;
    }

    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DATABASE,
            serverSelectionTimeoutMS: 5000 // Removed trailing comma here
        });
        mongoConnection = conn;
        console.log('Connected to MongoDB');
        return conn;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}
export async function connectDatabases() {
  await connectMongoDB();
}