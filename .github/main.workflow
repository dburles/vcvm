workflow "Daily deploy" {
  on = "schedule(0 0 * * *)"
  resolves = ["Deploy"]
}

action "Deploy" {
  uses = "netlify/actions/build@master"
  secrets = ["GITHUB_TOKEN"]
}
