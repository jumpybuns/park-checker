import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Home = () => {
  const [recipient, setRecipient] = useState('');
  const [_desiredDate, setDesiredDate] = useState('');
  const [oneParkStartDate, setOneParkStartDate] = useState('');
  const [oneParkEndDate, setOneParkEndDate] = useState('');
  const [parkHopperStartDate, setParkHopperStartDate] = useState('');
  const [parkHopperEndDate, setParkHopperEndDate] = useState('');

  const checkTix = () => {
    fetch(
      `https://park-checker.vercel.app/desired-date?&_desiredDate=${_desiredDate}&recipient=${recipient}&oneParkStartDate=${oneParkStartDate}&oneParkEndDate=${oneParkEndDate}&parkHopperStartDate=${parkHopperStartDate}&parkHopperEndDate=${parkHopperEndDate}&accountSid=${process.env.ACCOUNT_SID}&authToken=${process.env.AUTH_TOKEN}`
    ).catch((err) => console.error(err));
  };

  const handleDesiredDate = (event) => {
    event.preventDefault();
    setDesiredDate(event.target.value);
  };

  const handleRecipient = (event) => {
    event.preventDefault();
    setRecipient(event.target.value);
  };
  const handleOneParkStartDate = (event) => {
    event.preventDefault();
    setOneParkStartDate(event.target.value);
  };
  const handleOneParkEndDate = (event) => {
    event.preventDefault();
    setOneParkEndDate(event.target.value);
  };
  const handleParkHopperStartDate = (event) => {
    event.preventDefault();
    setParkHopperStartDate(event.target.value);
  };
  const handleParkHopperEndDate = (event) => {
    event.preventDefault();
    setParkHopperEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    form.reset();
    alert(`Your message was added`);
  };

  return (
    <Box
      className='container'
      display='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      my={8}
    >
      <Heading mb={8}>Parking Checker</Heading>
      <Text w='75ch'>
        Enter the date or dates you are planning to attend Disney Land Theme
        parks and have get a text update as soon as a space becomes avail!
        Available parking spots suddenly open up all the time so miss out.
      </Text>

      <form onSubmit={handleSubmit} name='form' variant='outline'>
        <FormControl isRequired w='64ch'>
          <VStack spacing={6}>
            <FormLabel htmlFor='date'>One Park Tickets</FormLabel>
            <Text w='64ch'>
              To enter one of the parks, each Guest is required to have a theme
              park reservation in addition to a valid ticket for the same park
              on the same date. Please check below to see if your desired date
              and theme park are currently available before purchasing your
              ticket.
            </Text>
            <Input
              id='one-park-start'
              type='date'
              placeholder='Start Date...'
              w='auto'
              value={oneParkStartDate}
              onChange={handleOneParkStartDate}
            />

            <Input
              id='one-park-end'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={oneParkEndDate}
              onChange={handleOneParkEndDate}
            />
            <FormLabel htmlFor='park-hopper'>Park Hopper Tickets</FormLabel>
            <Text>
              Guests with a Park Hopper ticket will select the first theme park
              they wish to visit to begin their day; then they can visit the
              other park later that day after 1:00 PM and go between the parks
              (based on availability).
            </Text>
            <Input
              id='park-hopper'
              type='date'
              w='auto'
              placeholder='Start Date...'
              value={parkHopperStartDate}
              onChange={handleParkHopperStartDate}
            />

            <Input
              id='park-hopper'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={parkHopperEndDate}
              onChange={handleParkHopperEndDate}
            />

            <FormLabel htmlFor='date'>Desired Arrival Date</FormLabel>
            <Input
              id='desired-date'
              type='date'
              w='auto'
              placeholder='Date Desired...'
              value={_desiredDate}
              onChange={handleDesiredDate}
            />
            <FormLabel htmlFor='recipient'>Your Phone Number</FormLabel>
            <Input
              id='recipient'
              placeholder='Recipient'
              w='auto'
              value={recipient}
              type='text'
              onChange={handleRecipient}
            />
            <Button color='gray.800' onClick={checkTix}>
              Check for Tickets
            </Button>
          </VStack>
        </FormControl>
      </form>
    </Box>
  );
};

export default Home;
