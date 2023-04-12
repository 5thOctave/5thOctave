import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      profileType
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      name
      email
      _id
      profileType
      courses {
        _id
        description
        instrument
        length
        level
        name
        schedule
        teacherId {
          name
        }
      }
    }
  }
`;

export const QUERY_COURSES = gql`
  query Query {
    courses {
      _id
      description
      instrument
      length
      level
      name
      schedule
      students {
        _id
        name
      }
      teacherId {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_COURSE = gql`
  query Query($courseId: ID!) {
    course(courseId: $courseId) {
      _id
      description
      instrument
      length
      level
      name
      schedule
      students {
        _id
        name
      }
      teacherId {
        _id
        name
        email
      }
    }
  }
`;

export const QUERY_INSTRUMENTS = gql`
  query Instruments($instrument: String!) {
    instruments(instrument: $instrument) {
      _id
      instrument
      length
      level
      name
      schedule
      teacherId {
        name
      }
      students {
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      profileType
      courses {
        _id
        name
        level
        schedule
        length
        instrument
        description
        teacherId {
          name
        }
      }
    }
  }
`;
