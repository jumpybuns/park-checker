//Dependencies:
//yarn add express cors twilio
const axios = require('axios');
const cron = require('node-cron');
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

//twilio requirements -- Texting API
const accountSid = 'AC024ce71342308276feacad3b8636ef4b';
const authToken = '9a01dd1731815b0945144ff6ba32781c';
const client = new twilio(accountSid, authToken);
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
  } = req.query;

  function checkForTickets() {
    callTicketAPI(
      `https://disneyland.disney.go.com/availability-calendar/api/calendar?segment=ticket&startDate=${oneParkStartDate}&endDate=${oneParkEndDate}`
    ).then((OnePark) => {
      console.log('One Park: ', OnePark);
      callTicketAPI(
        `https://disneyland.disney.go.com/availability-calendar/api/calendar?segment=ph&startDate=2022-03-28&endDate=2022-03-30`
      ).then((ParkHopper) => {
        console.log(
          'Park Hopper: ',
          ParkHopper,
          parkHopperStartDate,
          parkHopperEndDate
        );
        if (OnePark || ParkHopper) {
          console.log('AVAILABLE BUY YOU SUCKAH!');
          client.messages
            .create({
              body:
                'TICKETS ARE AVAILABLE!! One Park: ' +
                OnePark +
                ', Park Hopper: ' +
                ParkHopper,
              from: '+15304297447',
              to: '+1' + recipient,
            })
            .then((message) => console.log(message.sid));
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
