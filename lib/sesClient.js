const { SESClient } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: "us-east-1" });

module.exports = { sesClient };
