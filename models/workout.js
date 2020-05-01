const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    totalDuration: {
        type: Number,
        default: 0,
    },
    exercises: [{}],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;