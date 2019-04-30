const request = require('request');
const ACCESS_TOKEN = '<USER_ACCESS_TOKEN>';

'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

app.post('/webhook', (req, res) => {

  let body = req.body;

  // Checks this is an event from a page subscription
  if (body.object === 'page') {

    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function (entry) {

      // Gets the message. entry.messaging is an array, but 
      // will only ever contain one message, so we get index 0
      let webhook_event = entry.messaging[0];
      console.log(webhook_event);

      // Get the sender PSID
      let sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);

      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        handleMessage(sender_psid, webhook_event.message);
      } else if (webhook_event.postback) {
        handlePostback(sender_psid, webhook_event.postback);
      }

    });

    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }

});

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

  // Your verify token. Should be a random string.
  let VERIFY_TOKEN = '<USER_VERIFY_TOKEN>'

  // Parse the query params
  let mode = req.query['hub.mode'];
  let token = req.query['hub.verify_token'];
  let challenge = req.query['hub.challenge'];

  // Checks if a token and mode is in the query string of the request
  if (mode && token) {

    // Checks the mode and token sent is correct
    if (mode === 'subscribe' && token === VERIFY_TOKEN) {

      // Responds with the challenge token from the request
      console.log('WEBHOOK_VERIFIED');
      res.status(200).send(challenge);

    } else {
      // Responds with '403 Forbidden' if verify tokens do not match
      res.sendStatus(403);
    }
  }
});

// Handles messages events
let title, description, latitude, longitude;
function handleMessage(sender_psid, received_message) {
  let response;
  // Check if the message contains text
  if (!received_message.text) {
    console.log('not exist message.');
    return
  }
  if (received_message.text.includes('Title')) {
    title = received_message.text.slice(8);
    return
  }
  if (received_message.text.includes('Description')) {
    description = received_message.text.slice(11);
    return
  }
  if (received_message.text.includes('Latitude')) {
    latitude = parseInt(received_message.text.slice(11));
    return
  }
  if (received_message.text.includes('Longitude')) {
    longitude = parseInt(received_message.text.slice(12));
    return
  }
  if (received_message.text.includes('Send data')) {
    console.log(`title: ${title}, description: ${description}, latitude: ${latitude}, longitude: ${longitude}`);
    let request_body = {
      title: title,
      description: description,
      latitude: latitude,
      longitude: longitude,
      media: [
        "string"
      ],
      pingIndex: 0
    }
    request.post('http://pinghack.azurewebsites.net/api/Ping', {
      json: request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('data sent!');
        console.log(res.statusCode);
      } else {
        console.error("Unable to send message:" + err);
      }
    });

    // Create the payload for a basic text message
    response = {
      "text": `send data`
    }
  } else if (received_message.attachments) {
    // Gets the URL of the message attachment
    let attachment_url = received_message.attachments[0].payload.url;
    response = {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [{
            "title": "Is this the right picture?",
            "subtitle": "Tap a button to answer.",
            "image_url": attachment_url,
            "buttons": [
              {
                "type": "postback",
                "title": "Yes!",
                "payload": "yes",
              },
              {
                "type": "postback",
                "title": "No!",
                "payload": "no",
              }
            ],
          }]
        }
      }
    }
  }

  // Sends the response message
  callSendAPI(sender_psid, response);
}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response
  }

  // Send the HTTP request to the Messenger Platform
  request({
    "uri": "https://graph.facebook.com/v2.6/me/messages",
    "qs": { "access_token": ACCESS_TOKEN },
    "method": "POST",
    "json": request_body
  }, (err, res, body) => {
    if (!err) {
      console.log('message sent!')
    } else {
      console.error("Unable to send message:" + err);
    }
  });
}