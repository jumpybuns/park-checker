import { Box, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Box
      className='about-container'
      p={8}
      h='100vh'
      display='flex'
      flexDir='column'
      alignItems='center'
    >
      <Heading py={8}>Easy to use service</Heading>
      <Text>
        Let&apos;s face it. Going on vacation is stressful enough and getting a
        good parking spot can make your whole day easier. We created this easy
        to use service to help Guests take finding a good parking spot off your
        plate. You&apos;ll have more time to think about what you want to do
        instead of where you want to park when you get there.
      </Text>
    </Box>
  );
};

export default About;
