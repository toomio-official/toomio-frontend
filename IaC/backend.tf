terraform {
  backend "s3" {
    bucket         = "terraform-state-toomio-project"
    key            = "frontend/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-state-lock-toomio-project"
    encrypt        = true
  }
}