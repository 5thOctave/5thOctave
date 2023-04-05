const { AuthenticationError } = require("apollo-server-express");
const { Profile, Course } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find();
    },
    courses: async () => {
      return Course.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    course: async (parent, { courseId }) => {
      return Course.findOne({ _id: courseId });
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
    // addCourse: async (parent, args) => {
    //   const course = await Course.create(args);

    //   return { course };
    // },
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
  },
};

module.exports = resolvers;
