import { gql } from "@apollo/client";

export const SUBMIT_STAGE = gql`
  mutation submitStage($email: String!, $inputs: [SubmitStageInput!]) {
    submitStage(email: $email, inputs: $inputs) {
      ok
      error
    }
  }
`;
