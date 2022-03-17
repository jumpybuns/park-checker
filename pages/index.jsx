import { Box, Text, Button, Heading, VStack, Image } from '@chakra-ui/react';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';
import Hero from '../components/Hero.jsx';
import Blob from '../components/Blob';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleHome = () => {
    router.push('/main');
  };

  if (session) {
    return (
      <Box
        className='container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
        color='whiteAlpha.900'
        bgGradient='linear(gray.900 0%, blue.900 20%)'
      >
        <Heading
          pos='absolute'
          top={2}
          left={2}
          mx={4}
          color='whiteAlpha.900'
          _hover={{ cursor: 'pointer' }}
        >
          PC
        </Heading>
        <Blob />
        <Hero />
        <VStack
          spacing={4}
          display='flex'
          alignItems='center'
          justifyContent='center'
          alignContent='center'
          textAlign='center'
          zIndex={2}
        >
          <Box textStyle='h1' pt={4}>
            California Theme Park Parking Checker
          </Box>
          <Text>
            You are signed in as {session.user.email} <br />
          </Text>
          <Text>Click here to continue to Parking Checker</Text>
          <DisneyButtonFilled onClick={handleHome} text='Home' />
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
        color='whiteAlpha.900'
        bgGradient='linear(gray.900 0%, blue.900 20%)'
      >
        <Heading
          pos='absolute'
          top={2}
          left={2}
          mx={4}
          color='whiteAlpha.900'
          _hover={{ cursor: 'pointer' }}
        >
          PC
        </Heading>
        <Blob />
        <Hero />
        <VStack spacing={4} zIndex={2}>
          <Box textStyle='h1' textAlign='center' pt={4}>
            California Theme Park Parking Checker
          </Box>
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
