import { gql } from "@apollo/client";

export const GET_STAGE = gql`
  query getStage($id: Int!) {
    getStage(id: $id) {
      ok
      error
      stage {
        id
        name
        steps {
          id
          name
          questions {
            id
            title
          }
        }
      }
    }
  }
`;
