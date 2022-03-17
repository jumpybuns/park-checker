import { Box, Text, VStack, Heading } from '@chakra-ui/react';
import DisneyButtonOutline from '../styles/custom/DisneyButtonOutline';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Box
      className='container'
      p={8}
      h='100vh'
      display='flex'
      flexDir='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
      color='whiteAlpha.900'
      bgGradient='linear(gray.900 0%, blue.900 20%)'
    >
      <VStack spacing={32}>
        <Heading>404 Not Found</Heading>
        <Text>
          Wrong way! Take another look at your printed out MapQuest directions{' '}
        </Text>
        <DisneyButtonOutline onClick={handleBack} text='Go Back' />
      </VStack>
    </Box>
  );
};

export default Custom404;
