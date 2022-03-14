import React from 'react';
import { Box, UnorderedList, ListItem, Image, Heading } from '@chakra-ui/react';
import NavLink from '../styles/custom/NavLink';
import Link from 'next/link';

const Header = () => (
  <Box
    display='flex'
    justifyContent='space-between'
    alignItems='center'
    h='80px'
    bgColor='whiteAlpha.700'
    px={6}
  >
    <Link href='/' passHref>
      <Heading mx={4} _hover={{ cursor: 'pointer' }}>
        PC
      </Heading>
    </Link>

    <UnorderedList
      listStyleType='none'
      display='flex'
      justifyContent='space-evenly'
      textColor='gray.900'
    >
      <ListItem>
        <NavLink to='/'>Home</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/about'>About</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/calendar'>Log In</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/contact'>Contact</NavLink>
      </ListItem>
    </UnorderedList>
  </Box>
);

export default Header;
