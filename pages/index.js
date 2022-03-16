import { Box, Text, Button, Heading, VStack } from '@chakra-ui/react';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';
import Hero from '../styles/custom/Hero';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <Box
        className='container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
        bg='whiteAlpha.900'
        color='gray.800'
      >
        <Hero />
        <VStack spacing={4}>
          <Heading>California Theme Park Parking Checker</Heading>

          <Text>
            You are signed in as {session.user.email} <br />
          </Text>
          <Text>Click here to continue to Parking Checker</Text>
          <DisneyButtonFilled href='/main' text='Home' />
          <Text>Or</Text>
          <DisneyButtonOutline text='Sign Out' onClick={signOut} />
        </VStack>
      </Box>
    );
  }
  return (
    <>
      <Box
        className='container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
        bg='whiteAlpha.900'
        color='gray.800'
      >
        <Hero />
        <VStack spacing={4}>
          <Heading>California Theme Park Parking Checker</Heading>
          <Text>
            Are you tired of refreshing your browser all day just to find a spot
            to park at Disneyland? Well this is the service for you. Spend that
            time packing and wrangling your family and let our site let you know
            via SMS text when a spot opens up. Parking spots can open up at any
            time but they also go very quickly so do not miss out!
          </Text>
          <Text>
            Please sign in to continue! <br />
          </Text>
          <DisneyButtonOutline text='Sign In' onClick={signIn} />
        </VStack>
      </Box>
    </>
  );
};

export default Home;
