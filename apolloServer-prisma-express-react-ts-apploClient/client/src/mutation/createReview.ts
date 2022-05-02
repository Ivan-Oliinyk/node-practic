import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation CreateReview($data: ReviewCreateInput!) {
    createReview(data: $data) {
      nickname
      summary
      text1
      text2
      text3
      id
    }
  }
`;
