**S3 Upload to DynamoDB Lambda Function**

This repository contains code for an AWS Lambda function that listens to an S3 bucket for new CSV files, parses the data, inserts it into a DynamoDB table, and sends a success notification email via Amazon SES. Below is a guide on how to set up and deploy the Lambda function using Serverless Framework.

### Setup

1. **Clone the Repository:**

   ```
   git clone <repository-url>
   ```

2. **Install Dependencies:**

   ```
   cd <repository-folder>
   npm install
   ```

3. **AWS Configuration:**

   - Ensure you have the AWS CLI configured with appropriate permissions.
   - Set up an S3 bucket where CSV files will be uploaded.
   - Create a DynamoDB table to store the data.
   - Configure Amazon SES for sending notification emails.

4. **Environment Variables:**
   - Set up the following environment variables either directly in the Lambda function or using AWS Parameter Store:
     - `TableName`: Name of the DynamoDB table.
     - `AWS_REGION`: AWS region where resources are deployed.
     - `EmailAddress`: Email address to which the success notification will be sent.

### Deployment

1. **Serverless Deployment:**

   ```
   serverless deploy
   ```

2. **Verify Deployment:**
   Ensure the Lambda function, S3 bucket, DynamoDB table, SES configuration, and IAM role are created successfully in your AWS account.

### File Structure

- **`src/`**: Contains the Lambda function code (`index.js`).
- **`layers/`**: Contains Node.js dependencies packaged as a Lambda layer.
- **`serverless.yml`**: Configuration file for Serverless Framework.

### Configuration Details

- **`serverless.yml`**: Defines the AWS Lambda function, S3 bucket, DynamoDB table, SES configuration, IAM role, and necessary permissions.
- **`index.js`**: Lambda function code that listens to S3 events, parses CSV data, inserts it into DynamoDB, and sends a success notification email via SES.

### Usage

1. **Upload CSV Files:**

   - Upload CSV files to the specified S3 bucket.
   - Ensure the CSV files follow the format expected by the Lambda function (comma-separated values with headers).

2. **Monitoring:**
   - Monitor the Lambda function logs in AWS CloudWatch for any errors or debugging information.
   - Check DynamoDB table for newly inserted data.
   - Check the email inbox for the success notification sent by SES.

### Permissions

- The Lambda function requires permissions to:
  - Read objects from the specified S3 bucket.
  - Write items to the specified DynamoDB table.
  - Send emails via Amazon SES for notifications.

### Cleanup

To avoid incurring charges, ensure to delete the resources when they are no longer needed:

```
serverless remove
```

### License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize this README according to your project's specific details and requirements.
