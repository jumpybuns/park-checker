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
import { useSession, signOut } from 'next-auth/react';
import React, { useState } from 'react';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
const today = new Date().toISOString().split('T').shift();

const Main = () => {
  const [recipient, setRecipient] = useState('');
  const [_desiredDate, setDesiredDate] = useState(today);
  const [oneParkStartDate, setOneParkStartDate] = useState(_desiredDate);
  const [oneParkEndDate, setOneParkEndDate] = useState(_desiredDate);
  const [parkHopperStartDate, setParkHopperStartDate] = useState(_desiredDate);
  const [parkHopperEndDate, setParkHopperEndDate] = useState(_desiredDate);
  const { data: session } = useSession();
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
  if (session) {
    return (
      <Box className='container' color='gray.900'>
        <Box
          className='main-container'
          display='flex'
          flexDir='column'
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
              <DisneyButtonFilled text='Check for Tickets' onClick={checkTix} />
              Check for Tickets
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
                Get the most out of your trip. Enjoy a full day exploring
                Disneyland Park or Disneyland California Adventure Park. To
                enter one of the parks, each Guest is required to have a theme
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
                Visit Disneyland Park and Disney California Adventure Park in
                the same day. With a Park Hopper ticket, you may enter the
                second park after 1:00 PM and go between the parks&#40;based on
                availability&#41;. Guests with a Park Hopper ticket will select
                the first theme park they wish to visit to begin their day; then
                they can visit the other park later that day after 1:00 PM and
                go between the parks (based on availability).
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
              <DisneyButtonFilled text='Check for Tickets' onClick={checkTix} />
            </VStack>
          </FormControl>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      className='main-container'
      display='flex'
      flexDir='column'
      alignItems='center'
      p={8}
      color='gray.900'
    >
      <Text>Please go back and sign in</Text>
    </Box>
  );
};

export default Main;
