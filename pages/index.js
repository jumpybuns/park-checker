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
import LoginModal from '../components/LoginModal';
import React, { useState } from 'react';

const today = new Date().toISOString().split('T').shift();

const Home = () => {
  const [recipient, setRecipient] = useState('');

  const [_desiredDate, setDesiredDate] = useState(today);
  const [oneParkStartDate, setOneParkStartDate] = useState(_desiredDate);
  const [oneParkEndDate, setOneParkEndDate] = useState(_desiredDate);
  const [parkHopperStartDate, setParkHopperStartDate] = useState(_desiredDate);
  const [parkHopperEndDate, setParkHopperEndDate] = useState(_desiredDate);

  console.log('CONSOLE', _desiredDate, oneParkEndDate);

  const checkTix = () => {
    fetch(
      `http://127.0.0.1:4000/desired-date?&_desiredDate=${_desiredDate}&recipient=${recipient}&oneParkStartDate=${oneParkStartDate}&oneParkEndDate=${oneParkEndDate}&parkHopperStartDate=${parkHopperStartDate}&parkHopperEndDate=${parkHopperEndDate}&accountSid=${process.env.ACCOUNT_SID}&authToken=${process.env.AUTH_TOKEN}`
    ).catch((err) => console.error(err));
  };

  const handleDesiredDate = (event) => {
    event.preventDefault();
    setDesiredDate(event.target.value);
    setOneParkStartDate(event.target.value);
    setOneParkEndDate(event.target.value);
    setParkHopperStartDate(event.target.value);
    setParkHopperEndDate(event.target.value);
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

  return (
    <Box className='container'>
      <LoginModal />
      <Box
        className='main-container'
        bgGradient='linear(gray.900 0%, blue.900 20%)'
        display='flex'
        flexDir='column'
        justifyContent='center'
        alignItems='center'
        p={8}
      >
        <Heading mb={8}>Parking Checker</Heading>
        <Text>
          Get SMS Text updates whenever your chosen parking spot is available.
          Enter the date or dates you are planning to attend Disney Land Theme
          parks and receive a text update as soon as a space becomes avail.
          Available parking spots suddenly open up all the time so don&apos;t
          miss out!
        </Text>

        <FormControl isRequired>
          <VStack spacing={3}>
            <FormLabel pt={2} htmlFor='date'>
              Desired Arrival Date
            </FormLabel>
            <Input
              id='desired-date'
              type='date'
              w='auto'
              placeholder='Desired date...'
              value={_desiredDate}
              onChange={handleDesiredDate}
            />
            <FormLabel htmlFor='recipient'>Your Phone Number</FormLabel>
            <Input
              id='recipient'
              placeholder='Phone number...'
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
      </Box>
      <Box className='sub-container' p={8}>
        <FormControl isRequired>
          <VStack spacing={4} align='center'>
            <Text fontWeight='semibold' fontSize='lg'>
              One Park Tickets
            </Text>
            <Text fontWeight='semibold'>
              One Park and Park Hopper date must be on and after your Desired
              Arrival Date
            </Text>
            <Text>
              To enter one of the parks, each Guest is required to have a theme
              park reservation in addition to a valid ticket for the same park
              on the same date. Please check below to see if your desired date
              and theme park are currently available before purchasing your
              ticket.
            </Text>
            <FormLabel htmlFor='date'>Start Date</FormLabel>
            <Input
              id='one-park-start'
              type='date'
              placeholder='Start Date...'
              w='auto'
              value={oneParkStartDate}
              onChange={handleOneParkStartDate}
            />
            <FormLabel htmlFor='date'>End Date</FormLabel>

            <Input
              id='one-park-end'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={oneParkEndDate}
              onChange={handleOneParkEndDate}
            />
            <Text fontWeight='semibold' fontSize='lg'>
              Park Hopper Tickets
            </Text>
            <Text>
              Guests with a Park Hopper ticket will select the first theme park
              they wish to visit to begin their day; then they can visit the
              other park later that day after 1:00 PM and go between the parks
              (based on availability).
            </Text>
            <FormLabel htmlFor='date'>Start Date</FormLabel>
            <Input
              id='park-hopper-start'
              type='date'
              w='auto'
              placeholder='Start Date...'
              value={parkHopperStartDate}
              onChange={handleParkHopperStartDate}
            />
            <FormLabel htmlFor='date'>End Date</FormLabel>
            <Input
              id='park-hopper-end'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={parkHopperEndDate}
              onChange={handleParkHopperEndDate}
            />
            <Button color='gray.800' onClick={checkTix}>
              Check for Tickets
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Home;
