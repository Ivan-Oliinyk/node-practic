"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
const graphql_scalars_1 = require("graphql-scalars");
const typeDefs = `
type Mutation {
  createDraft(authorEmail: String!, data: PostCreateInput!): Post
  deletePost(id: Int!): Post
  incrementPostViewCount(id: Int!): Post
  signupUser(data: UserCreateInput!): User!
  togglePublishPost(id: Int!): Post
}

type Post {
  author: User
  content: String
  createdAt: DateTime!
  id: Int!
  published: Boolean!
  title: String!
  updatedAt: DateTime!
  viewCount: Int!
}

input PostCreateInput {
  content: String
  title: String!
}

input PostOrderByUpdatedAtInput {
  updatedAt: SortOrder!
}

type Query {
  allUsers: [User!]!
  draftsByUser(userUniqueInput: UserUniqueInput!): [Post]
  feed(orderBy: PostOrderByUpdatedAtInput, searchString: String, skip: Int, take: Int): [Post!]!
  postById(id: Int): Post
}

enum SortOrder {
  asc
  desc
}

type User {
  email: String!
  id: Int!
  name: String
  posts: [Post!]!
}

input UserCreateInput {
  email: String!
  name: String
  posts: [PostCreateInput!]
}

input UserUniqueInput {
  email: String
  id: Int
}

scalar DateTime
`;
const resolvers = {
    Query: {
        allUsers: (_parent, _args, context) => {
            return context.prisma.user.findMany();
        },
        postById: (_parent, args, context) => {
            return context.prisma.post.findUnique({
                where: { id: args.id || undefined },
            });
        },
        feed: (_parent, args, context) => {
            const or = args.searchString
                ? {
                    OR: [
                        { title: { contains: args.searchString } },
                        { content: { contains: args.searchString } },
                    ],
                }
                : {};
            return context.prisma.post.findMany({
                where: Object.assign({ published: true }, or),
                take: args === null || args === void 0 ? void 0 : args.take,
                skip: args === null || args === void 0 ? void 0 : args.skip,
                orderBy: args === null || args === void 0 ? void 0 : args.orderBy,
            });
        },
        draftsByUser: (_parent, args, context) => {
            return context.prisma.user
                .findUnique({
                where: {
                    id: args.userUniqueInput.id || undefined,
                    email: args.userUniqueInput.email || undefined,
                },
            })
                .posts({
                where: {
                    published: false,
                },
            });
        },
    },
    Mutation: {
        signupUser: (_parent, args, context) => {
            var _a;
            const postData = (_a = args.data.posts) === null || _a === void 0 ? void 0 : _a.map((post) => {
                return { title: post.title, content: post.content || undefined };
            });
            return context.prisma.user.create({
                data: {
                    name: args.data.name,
                    email: args.data.email,
                    posts: {
                        create: postData,
                    },
                },
            });
        },
        createDraft: (_parent, args, context) => {
            return context.prisma.post.create({
                data: {
                    title: args.data.title,
                    content: args.data.content,
                    author: {
                        connect: { email: args.authorEmail },
                    },
                },
            });
        },
        togglePublishPost: (_parent, args, context) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const post = yield context.prisma.post.findUnique({
                    where: { id: args.id || undefined },
                    select: {
                        published: true,
                    },
                });
                return context.prisma.post.update({
                    where: { id: args.id || undefined },
                    data: { published: !(post === null || post === void 0 ? void 0 : post.published) },
                });
            }
            catch (error) {
                throw new Error(`Post with ID ${args.id} does not exist in the database.`);
            }
        }),
        incrementPostViewCount: (_parent, args, context) => {
            return context.prisma.post.update({
                where: { id: args.id || undefined },
                data: {
                    viewCount: {
                        increment: 1,
                    },
                },
            });
        },
        deletePost: (_parent, args, context) => {
            return context.prisma.post.delete({
                where: { id: args.id },
            });
        },
    },
    DateTime: graphql_scalars_1.DateTimeResolver,
    Post: {
        author: (parent, _args, context) => {
            return context.prisma.post
                .findUnique({
                where: { id: parent === null || parent === void 0 ? void 0 : parent.id },
            })
                .author();
        },
    },
    User: {
        posts: (parent, _args, context) => {
            return context.prisma.user
                .findUnique({
                where: { id: parent === null || parent === void 0 ? void 0 : parent.id },
            })
                .posts();
        },
    },
};
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder || (SortOrder = {}));
exports.schema = (0, schema_1.makeExecutableSchema)({
    resolvers,
    typeDefs,
});
//# sourceMappingURL=schema.js.map