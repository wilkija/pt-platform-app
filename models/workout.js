const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    body: {
        type: String,
        required: true,
    },
    exercises: {
        type: String,
    },
    assignedUsers: {
        type: Array,
    }
});

module.exports = mongoose.model('Workout', WorkoutSchema);

