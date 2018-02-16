module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Voxxed Greece',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'voxxed-greece.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-86278976164-86232138035-315732351937-b68e4e3b2ac898ce342b3d45d0e8d6b3',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "en",
};
