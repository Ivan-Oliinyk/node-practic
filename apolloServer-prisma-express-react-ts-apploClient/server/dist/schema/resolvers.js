"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const graphql_scalars_1 = require("graphql-scalars");
exports.resolvers = {
    Query: {
        reviews: (_parent, args, context) => {
            return context.prisma.review.findMany({
                take: args === null || args === void 0 ? void 0 : args.take,
                skip: args === null || args === void 0 ? void 0 : args.skip,
                orderBy: args === null || args === void 0 ? void 0 : args.orderBy,
            });
        },
        review: (_parent, args, context) => {
            return context.prisma.review.findUnique({
                where: { id: args.id || undefined },
            });
        },
    },
    Mutation: {
        createReview: (_parent, args, context) => {
            return context.prisma.review.create({
                data: Object.assign({}, args.data),
            });
        },
        deleteReview: (_parent, args, context) => {
            return context.prisma.review.delete({
                where: { id: args.id },
            });
        },
        udateReview: (_parent, args, context) => {
            return context.prisma.review.update({
                where: { id: args.id },
                data: Object.assign({}, args.data),
            });
        },
    },
    DateTime: graphql_scalars_1.DateTimeResolver,
};
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (SortOrder = {}));
//# sourceMappingURL=resolvers.js.map