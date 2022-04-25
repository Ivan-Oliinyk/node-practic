import { Context } from "../context";
import { DateTimeResolver } from "graphql-scalars";

export const resolvers = {
  Query: {
    reviews: (
      _parent,
      args: {
        skip: number;
        take: number;
        orderBy: ReviewOrderByFieldInput;
      },
      context: Context
    ) => {
      return context.prisma.review.findMany({
        take: args?.take,
        skip: args?.skip,
        orderBy: args?.orderBy,
      });
    },

    review: (_parent, args: { id: number }, context: Context) => {
      return context.prisma.review.findUnique({
        where: { id: args.id || undefined },
      });
    },
  },

  Mutation: {
    createReview: (
      _parent,
      args: { data: PostCreateInput },
      context: Context
    ) => {
      return context.prisma.review.create({
        data: { ...args.data },
      });
    },

    deleteReview: (_parent, args: { id: number }, context: Context) => {
      return context.prisma.review.delete({
        where: { id: args.id },
      });
    },

    udateReview: (
      _parent,
      args: { id: number; data: PostCreateInput },
      context: Context
    ) => {
      return context.prisma.review.update({
        where: { id: args.id },
        data: { ...args.data },
      });
    },
  },

  DateTime: DateTimeResolver,
};

interface PostCreateInput {
  text1: string;
  text2: string;
  text3: string;
  summary: string;
  nickname: string;
}

enum SortOrder {
  asc,
  desc,
}

enum Fields {
  id,
  text1,
  text2,
  text3,
  summary,
  nickname,
  createdAt,
  updatedAt,
}
interface ReviewOrderByFieldInput {
  id?: SortOrder;
  text1?: SortOrder;
  text2?: SortOrder;
  text3?: SortOrder;
  summary?: SortOrder;
  nickname?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
}
// interface ReviewOrderByFieldInput {
//   id?: SortOrder;
//   text1?: SortOrder;
//   text2?: SortOrder;
//   text3?: SortOrder;
//   summary?: SortOrder;
//   nickname?: SortOrder;
//   createdAt?: SortOrder;
//   updatedAt?: SortOrder;
// }
