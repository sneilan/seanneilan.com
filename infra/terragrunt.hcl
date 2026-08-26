# Root terragrunt config — shared remote state + provider for all units under infra/.
# Auth: AWS SSO profile "sneilan" (account 888199526337). No credentials in this repo.

remote_state {
  backend = "s3"

  generate = {
    path      = "backend.tf"
    if_exists = "overwrite_terragrunt"
  }

  config = {
    bucket  = "seanneilan-tfstate-888199526337"
    key     = "${path_relative_to_include()}/terraform.tfstate"
    region  = "us-east-2"
    profile = "sneilan"
    encrypt = true
  }
}

generate "provider" {
  path      = "provider.tf"
  if_exists = "overwrite_terragrunt"

  contents = <<EOF
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}

provider "aws" {
  region  = "us-east-2"
  profile = "sneilan"

  default_tags {
    tags = {
      Project   = "grid-draw-api"
      ManagedBy = "terragrunt"
    }
  }
}
EOF
}
