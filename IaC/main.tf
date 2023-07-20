module "frontend" {
  source = "github.com/toomio-official/terraform-s3-cloudfront-module?ref=v0.1.0"
  s3_bucket_name = "toomio-frontend"
  cloudfront_distribution_description = "Toomio Frontend"
  domain_name = "toomio.com"
  acm_certificate_arn = "arn:aws:acm:us-east-1:850515863053:certificate/496021ba-bb10-4ee3-b53c-0b0b4a98e27c"
  index_document = "index.html"
}