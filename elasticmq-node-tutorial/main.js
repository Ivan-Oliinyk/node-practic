/*
  queue:
    image: s12v/elasticmq
    ports:
      - 9324:9324
*/

/*
 aws --endpoint-url http://localhost:9324 sqs create-queue --queue-name newqueue
 aws --endpoint-url http://localhost:9324 sqs send-message --queue-url http://localhost:9324/queue/default --message-body "Hello, queue!"
*/
// Load the AWS SDK for Node.js
const AWS = require("aws-sdk");

const options = {
  endpoint: "http://localhost:9324",
  sslEnabled: false,
  apiVersion: "2012-11-05",
  region: "elasticmq",
  accessKeyId: "x",
  secretAccessKey: "x",
};

console.log("options", options);
const sqs = new AWS.SQS(options);
const sns = new AWS.SNS({
  ...options,
  endpoint: "http://sns:9911",
});
// Set the region
// AWS.config.update({ region: 'REGION' });

// Create an SQS service object
// const sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

async function main() {
  console.log("inicializando...!!!");
  // sns.subscribe()
  const { QueueUrl } = await sqs
    .createQueue({
      QueueName: "ErickVaiB",
    })
    .promise();

  const qs = await sqs.listQueues().promise();
  console.log("qs", qs);
  // const { TopicArn } = await sns
  //   .createTopic({
  //     Name: "demo",
  //   })
  //   .promise();
  // console.log('snsTopic', TopicArn);

  const {
    Attributes: { QueueArn },
  } = await sqs
    .getQueueAttributes({
      QueueUrl,
      AttributeNames: ["QueueArn"],
    })
    .promise();
  // console.log('QueueArn', QueueArn);

  const subscribe = await sns
    .subscribe({
      TopicArn,
      Protocol: "sqs",
      Endpoint: QueueUrl,
    })
    .promise();

  // console.log('subscribe', subscribe);

  const queueUrl = QueueUrl;
  const sqsArn = QueueArn;
  const topicArn = TopicArn;

  const attributes = {
    Version: "2008-10-17",
    Id: `${sqsArn}/SQSDefaultPolicy`,
    Statement: [
      {
        Sid: `Sid${new Date().getTime()}`,
        Effect: "Allow",
        Principal: {
          AWS: "*",
        },
        Action: "SQS:SendMessage",
        Resource: sqsArn,
        Condition: {
          ArnEquals: {
            "aws:SourceArn": topicArn,
          },
        },
      },
    ],
  };

  const setQueueAttributes = await sqs
    .setQueueAttributes({
      QueueUrl: queueUrl,
      Attributes: {
        Policy: JSON.stringify(attributes),
      },
    })
    .promise();
  // console.log('setQueueAttributes', setQueueAttributes);

  const publishParams = {
    TopicArn,
    Message: JSON.stringify({ success: true }),
  };
  console.log("waiting...");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("waiting... after 3");

  sqs.receiveMessage({ QueueUrl }, (err, data) => {
    if (err) return console.error("DEU RUIM", JSON.stringify(err));
    console.log("received message", data);

    if (data && data.Messages && data.Messages.length > 0) {
      console.log("do something with the message here...", data.Messages);

      // // Delete the message when we've successfully processed it
      const deleteMessageParams = {
        QueueUrl: queueUrl,
        ReceiptHandle: data.Messages[0].ReceiptHandle,
      };

      sqs.deleteMessage(deleteMessageParams);
    }
  });

  // setInterval(async () => {
  //   const t = await sns.publish(publishParams).promise();
  //   console.log('TT', t);
  // }, 2000);
}

main();
