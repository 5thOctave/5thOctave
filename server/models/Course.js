const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
    enum: ["beginner", "intermediate", "advanced"],
  },
  instrument: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacherId: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  students: [Number],
});

const Course = model("Course", courseSchema);

module.exports = Course;
