// pages/api/mongoData.js
import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  const { db } = await dbConnect();

  const lessonsData = await db.collection('Lessons').find({}).toArray();
  const userDataData = await db.collection('userData').find({}).toArray();

  res.status(200).json({ lessonsData, ealData });
}