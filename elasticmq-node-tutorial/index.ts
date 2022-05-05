import { SQS } from "aws-sdk";

const queue = new SQS({
  endpoint: "http://localhost:9324",
  sslEnabled: false,
  apiVersion: "2012-11-05",
  region: "elasticmq",
  accessKeyId: "x",
  secretAccessKey: "x",
});

(async () => {
  const queues = await queue.listQueues().promise();
  console.log(queues);
})();
