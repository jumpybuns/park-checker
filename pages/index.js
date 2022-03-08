import {
  Flex,
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [recipient, setRecipient] = useState('');
  const [textmessage, setTextMessage] = useState('');
  const [_desiredDate, setDesiredDate] = useState('');

  const sendText = (_) => {
    //pass text message GET variables via query string
    fetch(
      `http://127.0.0.1:4000/send-text?recipient=${recipient}&textmessage=${textmessage}&_desiredDate=${_desiredDate}`
    ).catch((err) => console.error(err));
  };

  const checkTix = () => {
    fetch(
      `http://127.0.0.1:4000/desired-date?&_desiredDate=${_desiredDate}`
    ).catch((err) => console.error(err));
  };

  const handleDesiredDate = (event) => {
    event.preventDefault();
    setDesiredDate(event.target.value);
  };

  const handleDesiredDateSubmit = (event) => {
    event.preventDefault();
    form.reset();
    alert(`Your message was added`);
  };

  const handleSetRecipient = (event) => {
    event.preventDefault();
    setRecipient(event.target.value);
  };
  const handleSetTextMessage = (event) => {
    event.preventDefault();
    setTextMessage(event.target.value);
  };

  return (
    <div className='container'>
      <Flex>
        <form onSubmit={handleDesiredDateSubmit} name='form' variant='outline'>
          <FormControl isRequired w='auto'>
            <Input
              id='date'
              type='text'
              placeholder='Date Desired...'
              value={_desiredDate}
              onChange={handleDesiredDate}
            />
          </FormControl>
        </form>
        <div style={{ marginTop: 10 }}>
          <h2> Send Text Message </h2>
          <label> Your Phone Number </label>
          <br />
          <Input
            placeholder='Recipient'
            value={recipient}
            type='text'
            onChange={handleSetRecipient}
          />
          <div />
          <label> Message </label>
          <br />
          <textarea
            rows={3}
            value={textmessage}
            type='text'
            onChange={handleSetTextMessage}
          />
          <div />
          <Button onClick={sendText}> Send Text </Button>
          <Button onClick={checkTix}>Check for Tickets</Button>
        </div>
      </Flex>
      <Text>{_desiredDate}</Text>
    </div>
  );
};

export default Home;
