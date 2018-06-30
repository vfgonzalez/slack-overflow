require('dotenv').config();
const express = require('express');
const getUrl = require('get-urls')
const app = express()
const { RTMClient } = require('@slack/client');
// const axios = require('axios')
// const createSlackEventAdapter = require('@slack/events-api').createSlackEventAdapter;
const { createMessageAdapter } = require('@slack/interactive-messages')

// Create the adapter using the app's verification token, read from environment variable
const slackInteractions = createMessageAdapter(process.env.SLACK_VERIFICATION_TOKEN);

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Attach the adapter to the Express application as a middleware
// NOTE: The path must match the Request URL and/or Options URL configured in Slack

//Testing getURL functionality

let setData = new Set()



const token = process.env.SLACK_API_TOKEN || '';
if (!token) { console.log('You must specify a token to use this example'); process.exitCode = 1; return; }




module.exports = function (app) {
    
    app.use('/slack/actions', slackInteractions.expressMiddleware());


    // Initialize an RTM API client
    
    const rtm = new RTMClient(token);
    // // Start the connection to the platform
    rtm.start();
    
    rtm.on('message', (event) => {
        const conversationId = 'GBFF13316'
        
        if( event.text.includes("http://"||"https://"|| "www." ||".com" || ".org" || ".net")){

            
            rtm.sendMessage('Thanks for sharing! :link:', conversationId)
            .then((res) => {
                // `res` contains information about the posted message
                console.log('Message reply successfully sent: ', res.ts);
                
                const string ="lorem ipsaiofjasljfasd  dsjfal;sfd dsijfoiapejfoja ojdas;ifdf http://google.com akljdfljkadshfa ljkdhfklahsdfl khasdfhalis"

                const call = getUrl(event.text)

               var x

                call.forEach((i)=>
                x=i
                )
                
                // axios.post('/resources', {
                //     link: x,
                //     title: 'Resource Shared via Slack',
                //     category: 'Slack Submission'
                //   })
                //   .then(function (response) {
                //     console.log(response);
                //   })
                //   .catch(function (error) {
                //     console.log(error);
                //   });
                
                console.log(x);
                
                // console.log(getUrl(event.text));
                
                
                
            })
            .catch(console.error);
            
        }
         
        

        
        // console.log(`Message from channel: ${event.channel} : message : ${event.text}`);

            
    })
}