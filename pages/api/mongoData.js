import dbConnect from '../../utils/dbConnect';

export default async function handler(req, res) {
  const { db } = await dbConnect();
  const mongoData = await db.collection('Lessons').find({}).toArray();
  res.status(200).json(mongoData);
}