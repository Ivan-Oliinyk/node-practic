import { gql } from "@apollo/client";

export const DELETE_REVIEW = gql`
  mutation DeleteReview($deleteReviewId: Int) {
    deleteReview(id: $deleteReviewId) {
      id
      nickname
    }
  }
`;
