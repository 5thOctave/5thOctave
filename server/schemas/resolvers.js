const { AuthenticationError } = require("apollo-server-express");
const { Profile, Course } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    courses: async () => {
      return Course.find().populate("teacherId").populate("students");
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    course: async (parent, { courseId }) => {
      return Course.findOne({ _id: courseId }).populate("teacherId").populate("students");
    },
    instruments: async (parent, { instrument }) => {
      return Course.find({ instrument: instrument }).populate("teacherId").populate("students");
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addProfile: async (parent, args) => {
      const profile = await Profile.create(args);
      const token = signToken(profile);

      return { token, profile };
    },
    addCourse: async (parent, args, context) => {
      if (context.user) {
        const course = await Course.create({ teacherId: context.user._id, ...args });
        await Profile.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { courses: course._id } }, { new: true });

        return { course };
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    // removeCourse: async (parent, { courseId }) => {
    //   return Course.findOneAndUpdate({ _id: courseId }, { $pull: { courses: courseId } }, { new: true });
    // },
    updateCourse: async (parent, { courseId }, context) => {
      await Course.findOneAndUpdate({ _id: courseId }, { $addToSet: { students: context.user._id } }, { new: true });
      await Profile.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { courses: courseId } }, { new: true });
    },
  },
};

module.exports = resolvers;
