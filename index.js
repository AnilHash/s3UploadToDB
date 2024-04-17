module.exports.handler = async (event) => {
  console.log(
    "[INFO] Event Object --> ",
    JSON.stringify(event),
    "OPENED EVENT",
    event["Records"][0]["s3"]
  );
};
