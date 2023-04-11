const { gql } = require("apollo-server-express");

//TODO: finish mutations for add and remove courses
//uncommment code in resolvers
//test in playground

const typeDefs = gql`
  type Profile {
    _id: ID
    username: String
    name: String
    profileType: String
    email: String
    password: String
    courses: [Course]
  }

  type Course {
    _id: ID
    name: String
    level: String
    instrument: String
    description: String
    teacherId: Profile
    length: Int
    schedule: String
    students: [Profile]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    courses: [Course]!
    course(courseId: ID!): Course
  }

  type Mutation {
    addProfile(name: String!, profileType: String, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addCourse(name: String!, level: String, instrument: String, description: String, length: Int, schedule: String,): Course
    updateCourse(courseId: ID!, studentId: ID): Course
    removeProfile: Profile
  }
`;

module.exports = typeDefs;
