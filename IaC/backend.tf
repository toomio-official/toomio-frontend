terraform {
  backend "s3" {
    bucket         = "terraform-state-toomio"
    key            = "frontend/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock-toomio"
    encrypt        = true
  }
}