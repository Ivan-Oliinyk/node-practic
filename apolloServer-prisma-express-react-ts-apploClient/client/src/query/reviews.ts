import { gql } from "@apollo/client";

export const GET_REVIEWS = gql`
  query Reviews($skip: Int, $take: Int, $orderBy: ReviewOrderByFieldInput) {
    reviews(skip: $skip, take: $take, orderBy: $orderBy) {
      id
      nickname
      summary
      text1
      text2
      text3
      createdAt
      updatedAt
    }
  }
`;
