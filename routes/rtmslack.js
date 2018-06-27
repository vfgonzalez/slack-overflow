require('dotenv').config();
const express = require('express');
const { RTMClient } = require('@slack/client');
const app = express()



const token = process.env.SLACK_API_TOKEN || '';
if (!token) { console.log('You must specify a token to use this example'); process.exitCode = 1; return; }

module.exports = function (app) {
    
    
    // Initialize an RTM API client
    const rtm = new RTMClient(token);
    // Start the connection to the platform
    rtm.start();
    
    // Log all incoming messages
    // rtm.on('message', (event) => {
    //     // Structure of `event`: <https://api.slack.com/events/message>
    //     console.log(`Message from channel: ${event.channel}: ${event.text}`);
    // })
    rtm.on('link_shared', (event) => {
        const conversationId = 'CAFL2MP5F'
        // Structure of `event`: <https://api.slack.com/events/message>
        rtm.sendMessage('link received', conversationId)
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message reply successfully sent: ', res.ts);
            })
            .catch(console.error);
        // console.log(`Message from channel: ${event.channel}: ${event.text}`);
    })
}