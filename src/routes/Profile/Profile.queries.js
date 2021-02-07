import { gql } from "@apollo/client";

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    getMyProfile {
      ok
      error
      user {
        id
        nickName
        gender
        birth
        createdAt
      }
    }
  }
`;
