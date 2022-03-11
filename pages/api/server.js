//Dependencies:
//yarn add express cors twilio
const axios = require('axios');
const cron = require('node-cron');
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements -- Texting API
// const accountSid = 'AC024ce71342308276feacad3b8636ef4b';
// const authToken = '9a01dd1731815b0945144ff6ba32781c';
const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

app.get('/desired-date', (req, res) => {
  const {
    _desiredDate,
    recipient,
    oneParkStartDate,
    oneParkEndDate,
    parkHopperStartDate,
    parkHopperEndDate,
    accountSid,
    authToken,
  } = req.query;

  const client = new twilio(accountSid, authToken);
  function checkForTickets() {
    callTicketAPI(
      `https://disneyland.disney.go.com/availability-calendar/api/calendar?segment=ticket&startDate=${oneParkStartDate}&endDate=${oneParkEndDate}`
    ).then((OnePark) => {
      console.log('One Park: ', OnePark, accountSid);
      callTicketAPI(
        `https://disneyland.disney.go.com/availability-calendar/api/calendar?segment=ph&startDate=${parkHopperStartDate}&endDate=${parkHopperEndDate}`
      ).then((ParkHopper) => {
        console.log('Park Hopper: ', ParkHopper);
        if (OnePark || ParkHopper) {
          console.log('AVAILABLE BUY YOU SUCKAH!');
          client.messages
            .create({
              body:
                'TICKETS ARE AVAILABLE!! One Park: ' +
                OnePark +
                ', Park Hopper: ' +
                ParkHopper +
                ' Visit the Reservation Availability Page as soon you can: ' +
                'https://disneyland.disney.go.com/availability-calendar/',
              from: '+15304297447',
              to: '+1' + recipient,
            })
            .then((message) => console.log(message.to));
        } else {
          console.log('no tickets available...');
        }
      });
    });
  }

  function callTicketAPI(url) {
    return new Promise((resolve, reject) => {
      let available = null;
      axios
        .get(url)
        .then((res) => {
          for (var i = 0; i < res.data.length; i++) {
            if (res.data[i].date == _desiredDate) {
              console.log(res.data[i]);
              available = res.data[i].parks.length > 0 ? true : false;
            }
          }
          resolve(available);
        })
        .catch((error) => {
          console.error(error);
          resolve(available);
        });
    });
  }
  cron.schedule('* * * * * *', function () {
    console.log('Check for Tickets: ' + new Date().toLocaleTimeString());
    checkForTickets();
  });
});

//Welcome Page for the Server
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server');
});

app.get('/');

app.listen(4000, () => console.log('Running on Port 4000'));
