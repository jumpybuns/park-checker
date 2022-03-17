//Dependencies:
//yarn add express cors twilio
const axios = require('axios');
const cron = require('node-cron');
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

let task = '';

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
    stop,
  } = req.query;

  const client = new twilio(accountSid, authToken);
  function checkForTickets() {
    callTicketAPI(
      `https://disneyland.disney.go.com/availability-calendar/api/calendar?segment=ticket&startDate=${oneParkStartDate}&endDate=${oneParkEndDate}`
    ).then((OnePark) => {
      console.log('One Park: ', OnePark);
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
                'https://disneyland.disney.go.com/availability-calendar/' +
                'or you can cancel the service by visiting our homepage' +
                'https://park-checker-d92305f6h-jumpybuns.vercel.app/',
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

  task = cron.schedule('* * * * * *', function () {
    console.log('Check for Tickets: ' + new Date().toLocaleTimeString());
    console.log('CONSOLE', stop);
    checkForTickets();
  });

  return res.send({
    message: 'Cron Started',
  });
});

app.get('/stop', (req, res) => {
  task.stop();

  return res.send({
    message: 'Cron Stopped',
  });
});

//Welcome Page for the Server
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server');
});

app.listen(4000, () => console.log('Running on Port 4000'));
