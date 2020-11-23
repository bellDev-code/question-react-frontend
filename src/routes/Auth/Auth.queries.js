import { gql } from "@apollo/client";

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
      user {
        id
      }
    }
  }
`;
