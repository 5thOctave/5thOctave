import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!, $profileType: String!) {
    addProfile(name: $name, email: $email, password: $password, profileType: $profileType) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_COURSE = gql`
  mutation AddCourse($instrument: String!, $level: String, $description: String, $length: Int, $schedule: String) {
    addCourse(instrument: $instrument, level: $level, description: $description, length: $length, schedule: $schedule) {
      _id
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation Mutation($courseId: ID!) {
    updateCourse(courseId: $courseId) {
      _id
      description
      instrument
      length
      level
      schedule
      students {
        _id
        name
      }
      teacherId {
        _id
        email
        name
      }
    }
  }
`;

export const REMOVE_COURSE = gql`
  mutation removeCourse($course: String!) {
    removeCourse(course: $course) {
      _id
      # name
      # skills
    }
  }
`;
