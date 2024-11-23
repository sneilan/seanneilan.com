---
title: "Hello World Python AWS Lambda"
date: "2024-09-03"
summary: "Step by step tutorial to create a AWS Python Lambda function."
description: "Step by step tutorial to create a Python/Docker AWS Lambda function."
toc: false
readTime: true
autonumber: true
math: false
tags: ["aws", "python", "docker", "terraform"]
showTags: true
hideBackToTop: false
---

This is a tutorial on setting up a dockerized Python AWS lambda function with Terraform.

Assumptions
* Linux/CLI Familiarity
* An AWS account with configured cli client.
* Mid-to-senior software level experience

# Overview
* Create lambda function
* Upload function to AWS and Run it

##### 1. Create lambda function

In this step, we will make a lambda function in a file called **app.py** and a **Dockerfile** to create a Docker image for the lambda function to live in.
###### a. app.py

Common practice is to put the lambda function in app.py. Make a folder and add a file named app.py and an empty Dockerfile.

```shell
mkdir my-lambda-func
cd my-lambda-func
touch app.py
touch Dockerfile
```

In `app.py`, paste the following to create a handler that returns a webpage.
```python
def handler(event, context):
    return {
        "headers": {"Content-Type": "text/html"},
        "statusCode": 200,
        "body": "Hello world!",
    }
```

When the lambda function is ran, it will return the dictionary returned by handler as-is. You can return any python datatype you want like a string, integer, dictionary or even a list. As long as it is serializable to JSON.
###### b. Dockerfile

In the `Dockerfile`, paste the following to create a container to run app.py.
```Dockerfile
FROM public.ecr.aws/lambda/python:3.12
COPY app.py ${LAMBDA_TASK_ROOT}
CMD [ "app.handler" ]
```
[source](https://gallery.ecr.aws/lambda/python)

`public.ecr.aws/lambda/python:3.12` is based on Fedora which uses `dnf` for package management. That means you can use the following to add python dependencies and packages that require the C compiler..
```Dockerfile
RUN pip install -r requirements.txt

# and for packages that require compilation
RUN dnf install make automake gcc gcc-c++ kernel-devel pkg-config python3-devel -y
```

###### c. Run and Test

Build the docker image containing your lambda function.
```shell
docker build --platform linux/amd64 -t my-lambda-func .
```
This image is specifically built for amd64 so you're using m1 you won't accidentally upload lambda functions that aren't runnable in AWS. FYI: AWS lambda can also run docker containers built for ARM.

Run 
```shell
docker run -p 8080:8080 my-lambda-func
```

Test
```shell
# In a new shell
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'
```

You'll see the following
```json
{"headers": {"Content-Type": "text/html"}, "statusCode": 200, "body": "Hello world!"}%
```

Congratulations you have ran and tested a lambda function locally!

##### 2. Upload to AWS and Run It

To upload your lambda function to AWS, you need to upload the docker image, configure the function and add IAM roles so your function can start. All of this can be done in Terraform. Terraform is a tool for managing infrastructure as code. Instructions to install can be found [here](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).

If you have not done so, create a file called main.tf to hold your infrastructure as code and paste the following into it.
```terraform
// https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build

terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}
```

And run 
```shell
terraform init
```

Now you are ready to create resources in your AWS account with terraform. This also assumes that your AWS cli is already set up.

After saving each terraform block to main.tf, run the following to create the infrastructure in your AWS account.
```shell
# Have terraform tell you what it plans it do.
terraform plan

# Tell terraform to do whatever it told you it planned to do.
terraform apply
```

With terraform, always run plan before apply to make sure terraform isn't doing something you don't want.

###### a. Create ECR Repo
```terraform
resource "aws_ecr_repository" "my-lambda-func" {
  name = "my-lambda-func"
}
```
ECR stands for elastic container registry and it’s used to store docker images so other AWS services can start containers using those images such as your lambda function.

###### b. Upload lambda function to ECR

Run the following commands in your shell to upload the dockerized lambda function to AWS.

Replace `8723490870234` with your AWS account id and `us-west-2` with your region.

```shell
# Login to ECR
aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin  8723490870234.dkr.ecr.us-east-2.amazonaws.com
# Tag your image
docker tag my-lambda-func:latest 8723490870234.dkr.ecr.us-west-2.amazonaws.com/my-lambda-func:latest
# Upload tagged image to ECR
docker push 8723490870234.dkr.ecr.us-west-2.amazonaws.com/my-lambda-func:latest
```

This will take some time.

###### c. IAM Roles

We have to give the lambda function permissions to run because AWS denies everything by default. This can be accomplished with the AWS IAM service. IAM stands for identity and access management. AWS uses IAM to manage access to cloud services. The service lets you define roles to delegate permission and access. We will create a type of role called an IAM execution role. Execution roles are what AWS uses allow services to start.

In order to create an execution role, we need to create a trust policy and a permissions policy. The trust policy is a json object that says the aws lambda service, which will execute the lambda function, can assume the role attached to the function. The permissions policy says the role attached to the function is allowed to execute lambda functions. We are saying to AWS: AWS Lambda service, you may identify as this execution role we created and execute the lambda function!

```terraform
// https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html

// Trust policy
data "aws_iam_policy_document" "AWSLambdaTrustPolicy" {
  statement {
    actions = ["sts:AssumeRole"]
    effect = "Allow"
    principals {
      type = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

// Create execution role with trust policy attached
resource "aws_iam_role" "terraform_function_role" {
  name = "terraform_function_role"
  assume_role_policy = data.aws_iam_policy_document.AWSLambdaTrustPolicy.json
}

// Give execution role ability to execute lambdas
resource "aws_iam_role_policy_attachment" "terraform_lambda_policy" {
  role = aws_iam_role.terraform_function_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}
```

###### d. Lambda Function

Next, the following code will create a lambda function in AWS using the docker image we uploaded and the execution role we created.
```terraform
resource "aws_lambda_function" "container_lambda" {
  function_name = "my-lambda-func"
  // terraform sugar to get iam arn
  role          = aws_iam_role.terraform_function_role.arn
  package_type  = "Image"
  // terraform sugar to get docker image uri from ecr.
  image_uri     = "${aws_ecr_repository.my-lambda-func.repository_url}:latest"
}
```
When the lambda function is deployed, AWS will stream the docker image to the lambda service so a container can be immediately booted and ran when the lambda function is called.

###### e. Run and test

Now you can put this behind an API gateway or use it in other services like so using boto3. To keep this tutorial short, here is how to immediately validate your uploaded AWS function.
```shell
aws lambda invoke --function-name my-lambda-func /dev/stdout 
```

This will print
```json
{"headers": {"Content-Type": "text/html"}, "statusCode": 200, "body": "Hello world!"}
{
    "StatusCode": 200,
    "ExecutedVersion": "$LATEST"
}
```
to the console! :)

Congratulations you’ve created a lambda function. It can be placed behind an api gateway or called by other services in AWS.
