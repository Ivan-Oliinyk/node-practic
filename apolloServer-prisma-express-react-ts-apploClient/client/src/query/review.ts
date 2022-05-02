import { gql } from "@apollo/client";

export const GET_REVIEW = gql`
  query Review($reviewId: Int) {
    review(id: $reviewId) {
      nickname
      text1
      text2
      text3
      summary
    }
  }
`;
