import { Box, Heading, Text } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { useEffect } from 'react';
import Header from '../components/Header';

const ThankYou = () => {
  useEffect(() => {
    setTimeout(() => {
      signOut();
      return <Text>You are now Signed Out.</Text>;
    }, 5000);
  }, []);

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
        <Text>
          Thank you for signing up for our service. We will now be logged out.
        </Text>
      </Box>
    </>
  );
};

export default ThankYou;
