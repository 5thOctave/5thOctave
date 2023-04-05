const { Schema, model } = require("mongoose");

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  level: {
    type: String,
    required: true,
  },
  instrument: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
});

// // set up pre-save middleware to create password
// profileSchema.pre("save", async function (next) {
//   if (this.isNew || this.isModified("password")) {
//     const saltRounds = 10;
//     this.password = await bcrypt.hash(this.password, saltRounds);
//   }

//   next();
// });

// // compare the incoming password with the hashed password
// profileSchema.methods.isCorrectPassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

// const Profile = model("Profile", profileSchema);

module.exports = Class;
