const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    learningStyle: {
        type: String,
        enum: ['visual', 'auditory', 'kinesthetic', 'read/write'],
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

const lessonSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    proficiencyLevel: {
        type: String,
        enum: ['Beginner', 'Intermediate', 'Advanced'],
        required: true
    },
    content: {
        type: String,
        required: true
    },
    activities: [activitySchema]
});

// Check if the model exists before creating a new one
if (mongoose.models.Lesson) {
    module.exports = mongoose.models.Lesson;
} else {
    module.exports = mongoose.model('Lesson', lessonSchema);
}