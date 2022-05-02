import "dotenv/config";
import routes from "./routes";

export default {
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 5000,
  routes,
};
