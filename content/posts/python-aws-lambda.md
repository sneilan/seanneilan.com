---
title: "Hello World Python AWS Lambda"
date: "2024-09-03"
summary: "Step by step tutorial to create a AWS Python Lambda function."
description: "Step by step tutorial to create a Python/Docker AWS Lambda function."
toc: false
readTime: false
autonumber: true
math: true
tags: ["aws", "python", "docker", "terraform"]
showTags: false
hideBackToTop: false
---

These instructions, aimed at experienced engineers, will create a running dockerized
python lambda function in your aws account.

They're aimed at experienced engineers who just want to run a lambda function.
The tutorial aggregates a lot of the documentation and gotchya's one runs into while
developing a lambda function for the first time. That way you can
get the annoying things out the way so you can do what you want to do.

If you need an explanation of what AWS Lambda is, go here.

General requirements like dependencies, scaling and billing
are described in the code comments.

Assumptions
* Linux/CLI Familiarity
* An AWS account
* Mid-to-senior software level experience

# Overview
1. Create lambda function
2. Upload to AWS

##### Create lambda function

In this step, we will make a lambda function in an app.py file, a Dockerfile to containerize
the lambda function and finally run / test our lambda function locally.

###### app.py

First make a folder with a file called app.py to run your lambda code
and a Dockerfile to containerize it.

```shell
mkdir my-lambda-func
cd my-lambda-func
touch app.py
touch Dockerfile
```

In `app.py`, paste the following to create a basic handler
that returns a simple webpage.
```python
def handler(event, context):
    return {
        "headers": {"Content-Type": "text/html"},
        "statusCode": 200,
        "body": "Hello world!",
    }
```

###### Dockerfile

In the `Dockerfile`, paste the following to create
a container to run app.py.
```Dockerfile
# AWS Provided lambda image that makes it easy to get up and running
# See https://gallery.ecr.aws/lambda/python
FROM public.ecr.aws/lambda/python:3.12

# LAMBDA_TASK_ROOT is a variable already set by lambda/python:3.12 docker image
# AWS Lambda looks for app.py inside of ${LAMBDA_TASK_ROOT}
# It tells you where to paste the code.

COPY app.py ${LAMBDA_TASK_ROOT}

CMD [ "app.handler" ]
```

###### Run and Test

Build the docker image containing your lambda function.

```shell
docker build -t my-lambda-func .
```

Run and Test
```shell
docker run -p 8080:8080 my-lambda-func

# In a new shell
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'
# You should see the following
{"headers": {"Content-Type": "text/html"}, "statusCode": 200, "body": "Hello world!"}%
```

##### Upload to AWS

Creating a function in aws lambda is a multistep process where you have to upload your docker image,
create the lambda function, set up permissions and 

1. Setup terraform
Create the following main.tf file
```terraform
# https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-build
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2" # your region here
}
```

1. Create ECR Repo

```terraform
resource "aws_ecr_repository" "my-lambda-func" {
  name                 = "my-lambda-func"
}
```

2. Upload lambda function to ECR

```shell
REGION=$(aws configure get region) # Ex: "us-west-2"
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text) # Ex: "98723490870234"

# Log docker into your private ecr repo
aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com

# Tag and push your lambda function image
docker tag my-lambda-func:latest $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/my-lambda-func:latest
docker push $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/my-lambda-func:latest
```

3. Create lambda function handler

Permissions

Why these permissions? What do they do?

```terraform
data "aws_iam_policy_document" "AWSLambdaTrustPolicy" {
  statement {
    actions    = ["sts:AssumeRole"]
    effect     = "Allow"
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "terraform_function_role" {
  name               = "terraform_function_role"
  assume_role_policy = data.aws_iam_policy_document.AWSLambdaTrustPolicy.json
}

resource "aws_iam_role_policy_attachment" "terraform_lambda_policy" {
  role       = aws_iam_role.terraform_function_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}
```

Lambda Function

```terraform
resource "aws_lambda_function" "container_lambda" {
  function_name = "my-lambda-func"
  role          = aws_iam_role.terraform_function_role.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.my-lambda-func.repository_url}:latest"
}
```

4. Create api gateway

What are the parts of an api gateway?
Why not a rest gateway vs http?

```terraform
# HTTP API Gateway
resource "aws_apigatewayv2_api" "lambda_api" {
  name          = "my-lambda-api"
  protocol_type = "HTTP"
}

# API Gateway Stage
resource "aws_apigatewayv2_stage" "lambda_stage" {
  api_id = aws_apigatewayv2_api.lambda_api.id
  name   = "my-lambda-stage"
  auto_deploy = true
}

# API Gateway Integration
resource "aws_apigatewayv2_integration" "lambda_integration" {
  api_id = aws_apigatewayv2_api.lambda_api.id
  integration_type = "AWS_PROXY"
  integration_uri = aws_lambda_function.container_lambda.invoke_arn
}

# API Gateway Route
resource "aws_apigatewayv2_route" "lambda_route" {
  api_id = aws_apigatewayv2_api.lambda_api.id
  route_key = "ANY /"
  target = "integrations/${aws_apigatewayv2_integration.lambda_integration.id}"  
}

# Lambda Permission
resource "aws_lambda_permission" "api_gateway_invoke" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.container_lambda.function_name  
  principal     = "apigateway.amazonaws.com"  
  # More specific source_arn if needed
  source_arn = "${aws_apigatewayv2_api.lambda_api.execution_arn}/*/*" 
}
```

5. Run / test

https://<unique-id>.execute-api.us-west-2.amazonaws.com/my-lambda-stage/

6. Check it out in aws!


##### Errata
1. Local development
2. Dependencies
3. Logging
4. Pure python lambda function
6. IAM permissions


Errata
1. Adding dependencies to your aws lambda function
2. Lambda permissions
3. Why use docker instead of raw lambda functions
4. 

