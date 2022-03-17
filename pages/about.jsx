import { Box, Text, Heading, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import DisneyButtonFilled from '../styles/custom/DisneyButtonFilled';
import { useRouter } from 'next/router';

const About = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Box
        className='about-container'
        p={8}
        h='100vh'
        display='flex'
        flexDir='column'
        alignItems='center'
      >
        <VStack spacing={4}>
          <Heading>About Our Site</Heading>
          <Text fontWeight='semibold'>Easy to use service</Text>
          <Text pb={8}>
            Let&apos;s face it. Going on vacation is stressful enough and
            getting a good parking spot can make your whole day easier. We
            created this easy to use service to help Guests relax and the
            parking spots come to them. You&apos;ll have more time to think
            about what you want to do instead of where you want to park when you
            get there.
          </Text>
          <DisneyButtonFilled onClick={() => router.back()} text='Go Back' />
        </VStack>
      </Box>
    </>
  );
};

export default About;
