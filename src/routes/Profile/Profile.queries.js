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
        profileImages {
          id
          url
        }
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($nickName: String, $birth: String, $photos: [PhotoInput!]) {
    updateUser(nickName: $nickName, birth: $birth, photos: $photos) {
      ok
      error
      user {
        id
      }
    }
  }
`;
