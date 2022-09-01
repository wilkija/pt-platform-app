const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['upper', 'core', 'lower']
  },
  muscle: {
    type: String,
    enum: ['Deltoid', 'Trapezius', 'Biceps', 'Triceps', 'Abdominals', 'Obliques', 'Calves', 'Forearms', 'Hamstrings', 'Quadriceps', 'Gluteus', 'Latissimus dorsi']
  },
  
});

const Exercise = mongoose.models.exercise || mongoose.model("exercise", ExerciseSchema);

export default Exercise;