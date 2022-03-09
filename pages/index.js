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
      `http://127.0.0.1:4000/desired-date?&_desiredDate=${_desiredDate}&recipient=${recipient}&oneParkStartDate=${oneParkStartDate}&oneParkEndDate=${oneParkEndDate}&parkHopperStartDate=${parkHopperStartDate}&parkHopperEndDate=${parkHopperEndDate}`
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
    >
      <Heading m={8}>Park Checker</Heading>

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
            <Text>{oneParkStartDate}</Text>
            <Input
              id='one-park-end'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={oneParkEndDate}
              onChange={handleOneParkEndDate}
            />
            <Text>{oneParkEndDate}</Text>
            <FormLabel htmlFor='date'>Park Hopper Tickets</FormLabel>
            <Text>
              Guests with a Park Hopper ticket will select the first theme park
              they wish to visit to begin their day; then they can visit the
              other park later that day after 1:00 PM and go between the parks
              (based on availability).
            </Text>
            <Input
              id='park-hopper-start'
              type='date'
              w='auto'
              placeholder='Start Date...'
              value={parkHopperStartDate}
              onChange={handleParkHopperStartDate}
            />
            <Text>{parkHopperStartDate}</Text>
            <Input
              id='park-hopper-end'
              type='date'
              w='auto'
              placeholder='End Date...'
              value={parkHopperEndDate}
              onChange={handleParkHopperEndDate}
            />
            <Text>{parkHopperEndDate}</Text>
            <FormLabel htmlFor='date'>Desrired Arrival Date</FormLabel>
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
      <Button
        as='a'
        variant='ghost'
        m={4}
        href='https://disneyland.disney.go.com/availability-calendar/'
      >
        Disney Site
      </Button>
    </Box>
  );
};

export default Home;
