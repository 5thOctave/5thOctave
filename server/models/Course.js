const { Schema, model } = require("mongoose");
const Profile = require("./Profile");

const courseSchema = new Schema({
  instrument: {
    type: String,
  },
  level: {
    type: String,
  },
  description: {
    type: String,
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  length: {
    type: Number,
  },
  schedule: {
    type: String,
  },
  image: {
    type: String,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "Profile",
    },
  ],
});

const Course = model("Course", courseSchema);

module.exports = Course;
