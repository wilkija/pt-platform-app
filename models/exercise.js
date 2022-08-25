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
  },
  muscle: {
    type: String,
  },
  
});

const Exercise = mongoose.models.exercise || mongoose.model("exercise", ExerciseSchema);

export default Exercise;