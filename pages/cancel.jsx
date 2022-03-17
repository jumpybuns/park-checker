import { Box, Text, useToast, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';

const Cancel = () => {
  const router = useRouter();
  const toast = useToast();

  const stopTix = () => {
    const id = 'toast-id';
    fetch('http://127.0.0.1:4000/stop').catch((err) => console.error(err));
    if (!toast.isActive(id)) {
      toast({
        id,
        title: 'Service canceled.',
        description: "We've canceled our service for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  return (
    <>
      <Header />
      <Box
        className='cancel-container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <VStack spacing={4}>
          <Text className='text-content'>
            Click Here to Cancel Your Subscription
          </Text>
          <DisneyButtonOutline text='Cancel' onClick={stopTix} />
          <Text>Or</Text>
          <DisneyButtonFilled onClick={() => router.back()} text='Go Back' />
        </VStack>
      </Box>
    </>
  );
};

export default Cancel;
