import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";

const client = new S3Client({});

module.exports.handler = async (event) => {
  console.log(
    "[INFO] Event Object --> ",
    JSON.stringify(event),
    "OPENED EVENT"
  );

  const Bucket = event["Records"][0]["s3"]["bucket"]["name"];

  const Key = event["Records"][0]["s3"]["object"]["key"];

  const command = new GetObjectCommand({
    Bucket,
    Key,
  });

  try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    console.log(str);
  } catch (err) {
    console.error(err);
  }
};
