// pages/api/lessons.js
import fetch from 'isomorphic-unfetch'; // Import fetch for making HTTP requests

export default async function handler(req, res) {
  const endpoint = "https://us-east-1.aws.data.mongodb-api.com/app/langapp3-gmrcskn/endpoint/Lessons";

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status}`);
    }
    const lessons = await response.json();
    res.status(200).json(lessons);
  } catch (error) {
    console.error('Error fetching lessons:', error.message);
    res.status(500).json({ error: 'Error fetching lessons' });
  }
}
