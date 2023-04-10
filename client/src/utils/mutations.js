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
  mutation addCourse($profileId: ID!, $name: String!, $level: String, $instrument: String, $description: String, $length: Int, $schedule: String) {
    addCourse(profileId: $profileId, skill: $skill) {
      _id
      name
      level
      instrument
      description
      length
      schedule
    }
  }
`;

export const REMOVE_SKILL = gql`
  mutation removeSkill($skill: String!) {
    removeSkill(skill: $skill) {
      _id
      name
      skills
    }
  }
`;
