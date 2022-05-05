import { Consumer } from "sqs-consumer";
import AWS from "aws-sdk";
import config from "../config/index";
import requestPrintService from "../helpers/requestPrintService";

const { SQS_URL, QUEUE_NAME } = config;

AWS.config.update({
  region: "elasticmq",
  accessKeyId: "x",
  secretAccessKey: "x",
});

export const consumer = Consumer.create({
  queueUrl: SQS_URL + QUEUE_NAME,
  handleMessage: async (message) => {
    const review = { ...JSON.parse(message.Body) };

    requestPrintService(review);
  },

  sqs: new AWS.SQS(),
});

console.log(SQS_URL);

consumer.on("error", (err) => {
  console.error(err.message);
});

consumer.on("processing_error", (err) => {
  console.error(err.message);
});

consumer.on("timeout_error", (err) => {
  console.error(err.message);
});
