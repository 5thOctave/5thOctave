const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

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
  //TODO: fix linking to teacher
  // teacherId: {
  //   type: Number,
  //   required: true,
  // },
  teacherName: {
    type: String,
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
  //TODO: fix showing array of students in course
  students: [Profile],
});

const Course = model("Course", courseSchema);

module.exports = Course;
