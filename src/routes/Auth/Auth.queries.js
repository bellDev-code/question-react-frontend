import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      ok
      error
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $nickName: String!
    $email: String!
    $password: String!
    $gender: GenderEnum!
    $birth: String!
  ) {
    addUser(
      nickName: $nickName
      email: $email
      password: $password
      gender: $gender
      birth: $birth
    ) {
      ok
      error
      token
    }
  }
`;

export const START_EMAIL_VERIFY = gql`
  mutation startEmailVerify($email: String!) {
    startEmailVerify(email: $email) {
      ok
      error
    }
  }
`;

export const COMPLETE_EMAIL_VERYFY = gql`
  mutation completeEmailVerify($email: String!, $code: String!) {
    completeEmailVerify(email: $email, code: $code) {
      ok
      error
    }
  }
`;
