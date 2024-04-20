const { SESClient } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: "us-east-1" });

exports.modules = { sesClient };
