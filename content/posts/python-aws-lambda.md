---
title: "Hello World Python AWS Lambda"
date: "2024-09-03"
# summary: "Step by step tutorial to create a AWS Python Lambda function."
description: "Step by step tutorial to create a Python/Docker AWS Lambda function."
toc: false
readTime: false
autonumber: true
math: true
tags: ["aws", "python", "docker"]
showTags: false
hideBackToTop: false
---

This is a step by step tutorial to create a Dockerized AWS Python Lambda function.

Copying/pasting each command as-is will create a running dockerized
python lambda function in your aws account.

It's aimed at experienced engineers who know how to write
software and just want to run a lambda function. The tutorial
aggregates a lot of the documentation and gotchya's one runs into while
developing a lambda function for the first time. That way you can
get the annoying things out the way so you can do what you want to do.

If you need an explanation of what AWS Lambda is, go here.

General requirements like dependencies, scaling and billing
are described in the code comments.

Assumptions
* Linux/CLI Familiarity
* An AWS account
* Mid-to-senior software level experience

###### Overview
1. Create lambda function
2. Upload to AWS

##### Create lambda function

First make a folder with a file called app.py to run your lambda code
and a Dockerfile to containerize it.

```shell
mkdir my-lambda-func
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

Build the docker image containing your lambda function.

```shell
docker build -t my-lambda-func .
```

Run and Test
```shell
docker run -p 8080:8080 my-lambda-func

# In a new shell
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{"payload":"hello world!"}'
# You should see some output!
```

##### Upload to AWS

Assumptions
1. Your aws CLI is set up


2. Upload to ECR.\
    a. Login to AWS\
    b. Create ECR repo\
    ```shell
    aws ecr create-repository \
    --repository-name my-web-app-images \
    --image-scanning-configuration scanOnPush=true \
    --image-tag-mutability IMMUTABLE

    ```
    c. Upload to ECR

3. Create AWS Lambda function\
4. Create API gateway.
4. Test.

Errata
1. Adding dependencies to your aws lambda function
2. Lambda permissions
3. Why use docker instead of raw lambda functions
4. 

