import { gql } from "@apollo/client";

export const UPDATE_REVIEW = gql`
  mutation UdateReview($data: ReviewCreateInput!, $udateReviewId: Int) {
    udateReview(data: $data, id: $udateReviewId) {
      text1
      text2
      text3
      summary
      nickname
    }
  }
`;
