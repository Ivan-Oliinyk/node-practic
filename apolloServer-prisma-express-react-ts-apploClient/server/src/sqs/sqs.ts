// const { SQS } = require("aws-sdk");
import { SQS } from "aws-sdk";
import config from "../config/index";

const { SQS_URL, SQS_SERVICE_URL } = config;

export const options = {
  endpoint: SQS_SERVICE_URL,
  sslEnabled: false,
  apiVersion: "2012-11-05",
  region: "elasticmq",
  accessKeyId: "x",
  secretAccessKey: "x",
};

const sqs = new SQS(options);

const getParamsForSqs = (
  name,
  delaySeconds = 60,
  messageRetentionPeriod = 86400
) => {
  return {
    QueueName: name,
    Attributes: {
      DelaySeconds: String(delaySeconds),
      MessageRetentionPeriod: String(messageRetentionPeriod),
    },
  };
};

const sendParams = (queueName, body, delaySeconds = 25) => {
  return {
    DelaySeconds: Number(delaySeconds),
    MessageAttributes: {
      Title: {
        DataType: "String",
        StringValue: "SQS service",
      },
      Author: {
        DataType: "String",
        StringValue: "Ivan Oliinyk",
      },
      WeeksOn: {
        DataType: "Number",
        StringValue: "6",
      },
    },
    MessageBody: body,
    QueueUrl: `${SQS_URL + queueName}`,
  };
};

class QueueSetting {
  async listen() {
    return sqs.listQueues({}, function (err, data) {
      if (err) {
        console.log("Error listen", err);
      } else {
        console.log("Success listen", data.QueueUrls);
      }
    });
  }

  async create(queueName) {
    return sqs.createQueue(getParamsForSqs(queueName), function (err, data) {
      if (err) {
        console.log("Error create", err);
      } else {
        console.log("Success create !", data.QueueUrl);
      }
    });
  }

  async send(name, body) {
    return sqs.sendMessage(sendParams(name, body), function (err, data) {
      if (err) {
        console.log("Error send", err);
      } else {
        console.log("Success send !", data.MessageId);
      }
    });
  }

  async delete(queueName) {
    const params = {
      QueueUrl: `${SQS_URL + queueName}`,
    };

    return sqs.deleteQueue(params, function (err, data) {
      if (err) {
        console.log("Error delete", err);
      } else {
        console.log(`Success delete !`, data);
      }
    });
  }

  async recieve(queueName) {
    const params = {
      QueueUrl: `${SQS_URL + queueName}`,
    };

    return sqs.receiveMessage(params, function (err, data) {
      if (err) {
        console.log("Error recieve", err);
      } else if (data.Messages) {
        data.Messages.forEach((msg) => {
          console.log("message =", msg);
        });
      }
    });
  }
}

export const QueueController = new QueueSetting();
