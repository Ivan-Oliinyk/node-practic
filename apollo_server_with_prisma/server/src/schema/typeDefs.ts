const { gql } = require("apollo-server");

export const typeDefs = gql`
  type Review {
    id: Int!
    text1: String
    text2: String
    text3: String
    summary: String
    nickname: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    reviews(skip: Int, take: Int, orderBy: ReviewOrderByFieldInput): [Review!]!
    review(id: Int): Review
  }

  type Mutation {
    createReview(data: ReviewCreateInput!): Review
    deleteReview(id: Int): Review
    udateReview(id: Int, data: ReviewCreateInput!): Review
  }

  input ReviewCreateInput {
    text1: String
    text2: String
    text3: String
    summary: String
    nickname: String
  }

  enum SortOrder {
    asc
    desc
  }

  input ReviewOrderByFieldInput {
    id: SortOrder
    text1: SortOrder
    text2: SortOrder
    text3: SortOrder
    summary: SortOrder
    nickname: SortOrder
    createdAt: SortOrder
    updatedAt: SortOrder
  }

  scalar DateTime
`;
