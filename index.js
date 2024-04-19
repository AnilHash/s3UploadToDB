const S3 = require("@aws-sdk/client-s3");
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const uuid = require("uuid");

const dbClient = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(dbClient);

const s3Client = new S3.S3Client({});

const TABLE_NAME = process.env.TableName;

module.exports.handler = async (event) => {
  console.log(
    "[INFO] Event Object --> ",
    JSON.stringify(event),
    "OPENED EVENT"
  );

  const Bucket = event["Records"][0]["s3"]["bucket"]["name"];

  const Key = event["Records"][0]["s3"]["object"]["key"];

  const command = new S3.GetObjectCommand({
    Bucket,
    Key,
  });

  try {
    const response = await s3Client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    const customers = str.split("\r\n");
    console.log(customers);
    for (let i = 1; i < customers.length - 1; i++) {
      const customer = customers[i].split(",");
      console.log(customer);
      const param = new PutCommand({
        TableName: TABLE_NAME,
        Item: {
          customerId: uuid.v4(),
          name: customer[0],
          vehical: customer[1],
        },
      });
      const res = await docClient.send(param);
      console.log("response", res);
    }
    return res;
  } catch (err) {
    console.error(err);
  }
};
