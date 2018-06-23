require('dotenv').config();
      SlackStrategy = require('passport-slack').Strategy,
      passport = require('passport'),
      express = require('express'),
      app = express();

      // Initialize using verification token from environment variables
const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const slackEvents = createSlackEventAdapter(process.env.SLACK_VERIFICATION_TOKEN);

 
// Initialize an Express application

const bodyParser = require('body-parser');
 
// You must use a body parser for JSON before mounting the adapter
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(require('body-parser').urlencoded({ extended: true }));

module.exports = function(app){

// setup the strategy using defaults 
passport.use(new SlackStrategy({
    clientID: process.env.SLACK_CLIENT_ID,
    clientSecret: process.env.SLACK_CLIENT_SECRET,
  }, (accessToken, refreshToken, profile, done) => {
    // optionally persist profile data
    done(null, profile);
  }
));

// passport.use(new SlackStrategy({
// 	clientID: process.env.SLACK_CLIENT_ID,
// 	clientSecret: process.env.SLACK_CLIENT_SECRET,
// 	scope: ['links:read'],
// 	skipUserProfile: true
// }, () => { }));



// Plug the Add to Slack (OAuth) helpers into the express app
app.use(passport.initialize());
app.get('/slack/authorization', (req, res) => {
  res.send('<a href="/auth/slack"><img alt="Add to Slack" height="40" width="139" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" /></a>');
});
app.get('/auth/slack', passport.authenticate('slack', {
  scope: ['links:read', "links:write"]
}));
app.get('/auth/slack/callback',
  passport.authenticate('slack', { session: false }),
  (req, res) => {
    // res.send('<p>Slack Overflow was successfully installed on your team.</p>');
    res.redirect("http://localhost:3000/")
  },
  (err, req, res, next) => {
    res.status(500).send(`<p>Greet and React failed to install</p> <pre>${err}</pre>`);
  }
);
 

// *** Greeting any user that says "hi" ***
slackEvents.on('link_shared', (message, body) => {
    // Only deal with messages that have no subtype (plain messages) and contain 'hi'
    if (!message.subtype && message.text.indexOf("") >= 0) {
      // Initialize a client
      const slack = getClientByTeamId(body.team_id);
      // Handle initialization failure
      if (!slack) {
        return console.error('No authorization found for this team. Did you install this app again after restarting?');
      }
        console.log(message.text);
        
  
      //   var str = message.text;
      // var n = str.indexOf(">" || "|" );
      // var url = str.slice(1,n)
      // console.log("Sliced message: " +url);
      // db.resources.create({
      //   title: "Slack Submission",
      //   description: "Shared link via Slackbot",
      //   category: "Slack Submissions",
      //   link : url,
      //   author : "Slack User on " + postingStamp
  
      // })
      // .then(function(){
      //   console.log("posted to Database")
      // })
  
  
  
      
      // Respond to the message back in the same channel
    //   slack.chat.postMessage({ channel: message.channel, text: `link received by ` })
    //     .catch(console.error);
      // // Respond to the message back in the same channel
      slack.chat.postMessage({channel: message.channel, text:`I Received your message`})
        .catch(console.error);
    }
    return message
    
    
  });



}