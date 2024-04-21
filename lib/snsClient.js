const { SNSClient } = require("@aws-sdk/client-sns");

const snsClient = new SNSClient({});

module.exports = { snsClient };
