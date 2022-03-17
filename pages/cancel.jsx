import { Box, Text, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
import AbortController from 'abort-controller';

const Cancel = () => {
  const [recipient, setRecipient] = useState('');
  const controller = new AbortController();
  const signal = controller.signal;
  const router = useRouter();

  const deleteTix = () => {
    fetch(`http://127.0.0.1:4000/desired-date`, {
      method: 'get',
      signal: signal,
    }).catch((err) => console.error(err));
    controller.abort();
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
          {/* <Input
            id='recipient'
            placeholder='Phone number...'
            w='auto'
            value={recipient}
            type='text'
            onChange={(event) => setRecipient(event.target.value)}
          /> */}
          <DisneyButtonOutline text='Cancel' onClick={deleteTix} />
          <DisneyButtonFilled onClick={() => router.back()} text='Go Back' />
        </VStack>
      </Box>
    </>
  );
};

export default Cancel;
