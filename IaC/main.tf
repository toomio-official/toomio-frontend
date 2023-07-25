module "frontend" {
  source = "github.com/toomio-official/terraform-s3-cloudfront-module?ref=v0.1.1"
  s3_bucket_name = "toomio-project-frontend-bucket"
  cloudfront_distribution_description = "Toomio Project Frontend"
  domain_names = ["toomio.com", "www.toomio.com"]
  acm_certificate_arn = "arn:aws:acm:us-east-1:499249761013:certificate/00ee6af5-9c96-4687-bd75-9ca3ed5de2eb"
  index_document = "index.html"
}