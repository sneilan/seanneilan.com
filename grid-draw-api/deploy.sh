#!/bin/bash
# Build the Go binary for the t4g.nano (linux/arm64), push it to S3, and
# restart the service on the single EC2 instance via SSM (no SSH keys).
set -euo pipefail
cd "$(dirname "$0")"

PROFILE="${AWS_PROFILE:-sneilan}"
REGION=us-east-2
BUCKET=grid-draw-api-888199526337

echo "==> building linux/arm64 binary"
GOOS=linux GOARCH=arm64 CGO_ENABLED=0 go build -trimpath -o build/grid-draw-api .

echo "==> uploading to s3://$BUCKET/releases/grid-draw-api"
aws --profile "$PROFILE" --region "$REGION" s3 cp build/grid-draw-api "s3://$BUCKET/releases/grid-draw-api"

INSTANCE_ID=$(aws --profile "$PROFILE" --region "$REGION" ec2 describe-instances \
  --filters "Name=tag:Name,Values=grid-draw-api" "Name=instance-state-name,Values=running" \
  --query 'Reservations[0].Instances[0].InstanceId' --output text)

if [[ "$INSTANCE_ID" == "None" || -z "$INSTANCE_ID" ]]; then
  echo "no running grid-draw-api instance found; run terragrunt apply first" >&2
  exit 1
fi

echo "==> restarting service on $INSTANCE_ID via SSM"
COMMAND_ID=$(aws --profile "$PROFILE" --region "$REGION" ssm send-command \
  --instance-ids "$INSTANCE_ID" \
  --document-name AWS-RunShellScript \
  --parameters 'commands=["/usr/local/bin/grid-draw-api-update"]' \
  --query 'Command.CommandId' --output text)

aws --profile "$PROFILE" --region "$REGION" ssm wait command-executed \
  --command-id "$COMMAND_ID" --instance-id "$INSTANCE_ID" || true

aws --profile "$PROFILE" --region "$REGION" ssm get-command-invocation \
  --command-id "$COMMAND_ID" --instance-id "$INSTANCE_ID" \
  --query '{Status:Status,Stdout:StandardOutputContent,Stderr:StandardErrorContent}' --output json

echo "==> deployed"
