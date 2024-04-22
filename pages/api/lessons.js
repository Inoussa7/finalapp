import fetch from 'node-fetch';

export default async function handler(req, res) {
    console.log('API Request Received');

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method === 'GET') {
        try {
            const response = await fetch("https://us-east-1.aws.data.mongodb-api.com/app/langapp3-gmrcskn/endpoint/Lessons");
            if (!response.ok) {
                console.error('Error fetching lessons:', response.status);
                res.status(500).json({ message: 'Server error', error: response.statusText });
                return;
            }
            const lessons = await response.json();
            console.log('Lessons:', lessons);
            if (lessons.length === 0) {
                console.log('No lessons found');
                res.status(404).json({message: 'No lessons found'});
                return;
            }
            res.status(200).json(lessons);
        } catch (error) {
            console.error('Error fetching lessons:', error);
            res.status(500).json({ message: 'Server error', error: error.message });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}