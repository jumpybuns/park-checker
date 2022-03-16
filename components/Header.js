import React from 'react';
import {
  Box,
  UnorderedList,
  ListItem,
  Image,
  Heading,
  Button,
} from '@chakra-ui/react';
import NavLink from '../styles/custom/NavLink';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Header = () => (
  <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    h='80px'
    bgColor='whiteAlpha.700'
    bgGradient='linear(gray.900 0%, blue.900 20%)'
    px={6}
  >
    <Link href='/' passHref>
      <Heading mx={4} color='whiteAlpha.900' _hover={{ cursor: 'pointer' }}>
        PC
      </Heading>
    </Link>

    <UnorderedList
      listStyleType='none'
      display='flex'
      justifyContent='space-evenly'
      color='whiteAlpha.900'
    >
      <ListItem>
        <NavLink to='/'>Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/about'>About</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/contact'>Contact</NavLink>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default Header;
