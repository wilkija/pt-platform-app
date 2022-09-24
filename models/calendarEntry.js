const mongoose = require('mongoose');
import Workout from './workout';

const CalendarEntrySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    workout: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: Workout,
    },
    clientId: {
        type: String,
        required: true
    },
});

module.exports = 
    mongoose.models.CalendarEntry || mongoose.model('CalendarEntry', CalendarEntrySchema);
