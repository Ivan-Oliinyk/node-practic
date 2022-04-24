const { ApolloServer, gql } = require("apollo-server");
const data = require("./data.json");
const config = require("./config");
console.log("first");
const typeDefs = gql `
  type Review {
    id: Int!
    text1: String
    text2: String
    text3: String
    summary: String
    nickname: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    reviews: [Review!]
    review(id: Int): Review
  }
`;
const reviews = [...data];
console.log("===>", config.DB_URL, "sdasd");
const resolvers = {
    Query: {
        reviews(parent, args) {
            return reviews;
        },
        review(parent, args) {
            return reviews.find((item) => item.id === Number(args.id));
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map