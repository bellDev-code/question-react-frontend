import { gql } from "@apollo/client";

export const GET_STAGE_LIST = gql`
  query getStageList {
    getStageList {
      ok
      error
      stages {
        id
        name
        thumbnail
      }
    }
  }
`;
