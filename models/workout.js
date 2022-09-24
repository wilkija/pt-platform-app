const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    type: {
        type: String,
        required: true,
        trim: true,
        enum: ["endurance", "strength", "flexibility", "balance"]
    },
    body: {
        type: String,
        required: true,
    },
    exercises: {
        type: Array
    },
    assignedUsers: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = 
    mongoose.models.Workout || mongoose.model('Workout', WorkoutSchema);

    // exercises: [{
    //     type: Schema.Types.ObjectId, ref: 'Exercise'
    // }],
    // assignedUsers: [{
    //     type: Schema.Types.ObjectId, ref: 'Client'
    // }],