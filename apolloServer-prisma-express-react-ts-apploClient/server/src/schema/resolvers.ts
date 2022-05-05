import { Context } from "../context";
import { DateTimeResolver } from "graphql-scalars";
import { QueueController } from "../sqs/sqs";
import config from "../config";
import { consumer } from "../sqs/consumer";
import requestPrintService from "../helpers/requestPrintService";

const { QUEUE_NAME, INTEGRATION_TRANSPORT } = config;

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
      //run sqs service
      if (INTEGRATION_TRANSPORT === "sqs") {
        QueueController.create(QUEUE_NAME);
        QueueController.send(QUEUE_NAME, JSON.stringify(args.data));
        consumer.start();
      } else {
        requestPrintService({ review: args.data });
      }

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
      //run sqs service
      if (INTEGRATION_TRANSPORT === "sqs") {
        QueueController.create(QUEUE_NAME);
        QueueController.send(QUEUE_NAME, JSON.stringify(args.data));
        consumer.start();
      } else {
        requestPrintService({ review: args.data });
      }

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
  asc = "asc",
  desc = "desc",
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
