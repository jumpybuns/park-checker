import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';

const ThankYou = () => {
  const router = useRouter();

  const handleSignOut = () => {
    signOut();
    router.push('/');
  };

  return (
    <>
      <Header />
      <Box
        className='container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <VStack spacing={4}>
          <Text>
            Thank you for signing up for our service. Do you want to go back and
            change your dates?
          </Text>
          <DisneyButtonFilled
            text='Go Back'
            onClick={() => router.push('/main')}
          />
          <Text>Or</Text>
          <DisneyButtonOutline text='Sign Out' onClick={handleSignOut} />
        </VStack>
      </Box>
    </>
  );
};

export default ThankYou;
