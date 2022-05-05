import "dotenv/config";
import routes from "./routes";

enum Transport {
  rest = "rest",
  sqs = "sqs",
}

type TRoutes = {
  PRINT: string;
};

type TConfig = {
  DATABASE_URL: string;
  PORT: number;
  CLIENT_URL: string;
  SQS_URL: string;
  SQS_SERVICE_URL: string;
  INTEGRATION_TRANSPORT: Transport;
  QUEUE_NAME: string;
  routes: TRoutes;
};

export default <TConfig>{
  DATABASE_URL: process.env.DATABASE_URL,
  PORT: process.env.PORT || 5000,
  CLIENT_URL: process.env.CLIENT_URL,
  SQS_URL: process.env.SQS_URL,
  SQS_SERVICE_URL: process.env.SQS_SERVICE_URL,
  QUEUE_NAME: process.env.QUEUE_NAME,
  INTEGRATION_TRANSPORT: process.env.INTEGRATION_TRANSPORT, /// must been "rest" or "sqs"
  routes,
};
