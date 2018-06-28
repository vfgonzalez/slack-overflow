require('dotenv').config();
const express = require('express');
const getUrl = require('get-urls')
const app = express()
const { RTMClient } = require('@slack/client');
const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const { createMessageAdapter } = require('@slack/interactive-messages')

// Create the adapter using the app's verification token, read from environment variable
const slackInteractions = createMessageAdapter(process.env.SLACK_VERIFICATION_TOKEN);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Attach the adapter to the Express application as a middleware
// NOTE: The path must match the Request URL and/or Options URL configured in Slack





const token = process.env.SLACK_API_TOKEN || '';
if (!token) { console.log('You must specify a token to use this example'); process.exitCode = 1; return; }




module.exports = function (app) {
    
    app.use('/slack/actions', slackInteractions.expressMiddleware());


// // Mount the event handler on a route
// // NOTE: you must mount to a path that matches the Request URL that was configured earlier
// app.use('/slack/events', slackEvents.expressMiddleware());

// // Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
// slackEvents.on('message', (event)=> {
//   console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
// });

// // Handle errors (see `errorCodes` export)
// slackEvents.on('error', console.error);






    // Initialize an RTM API client
    
    const rtm = new RTMClient(token);
    // // Start the connection to the platform
    rtm.start();
    
    // Log all incoming messages
    // rtm.on('message', (event) => {
    //     // Structure of `event`: <https://api.slack.com/events/message>
    //     console.log(`Message from channel: ${event.channel}: ${event.text}`);
    // })
    rtm.on('message', (event) => {
        const conversationId = 'CAG00EFHA'
        
            
            rtm.sendMessage('Thanks for the link', conversationId)
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message reply successfully sent: ', res.ts);
            })
            .catch(console.error);
            
    
         
        

        
        // console.log(`Message from channel: ${event.channel} : message : ${event.text}`);

            
    })
}