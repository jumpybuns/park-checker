import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Button,
  Heading,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const Main = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );

  // return (
  //   <Box
  //     className='container'
  //     p={8}
  //     h='100vh'
  //     display='flex'
  //     flexDir='column'
  //     alignItems='center'
  //     bgGradient='linear(gray.900 0%, blue.900 20%)'
  //   >
  //     <Heading>California Theme Park Parking Checker</Heading>
  //     <Text>
  //       Are you tired of refreshing your browser all day just to find a spot to
  //       park at Disneyland? Well this is the service for you. Spend that time
  //       packing and wrangling your family and let our site let you know via SMS
  //       text when a spot opens up. Parking spots can open up at any time but
  //       they also go very quickly so do not miss out!
  //     </Text>
  //     <FormControl mt={4}>
  //       <FormLabel htmlFor='email'>Email address</FormLabel>
  //       <Input id='email' type='email' />
  //       <FormHelperText>We&apos;ll never share your email.</FormHelperText>
  //       <FormLabel htmlFor='password' display='flex' justifyContent='left'>
  //         Password
  //       </FormLabel>
  //       <Input id='password' type='password' />
  //       <Button color='gray.900' my={2}>
  //         Login
  //       </Button>
  //     </FormControl>
  //   </Box>
  // );
};

export default Main;
