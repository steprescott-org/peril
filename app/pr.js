import {danger, fail, message, warn} from 'danger'

// Ensure the PR body contains a link to the Jira ticket.
const prBody = danger.github.pr.body
const ticketUrlPattern = /https:\/\/developer\.bskyb\.com\/jira\/browse\/MSA-(\d+)/g
if (!ticketUrlPattern.test(prBody)) {
  fail("🔍 Please add a link to the Jira ticket.")
}
