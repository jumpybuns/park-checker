import React from 'react';
import { Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ to, activeProps, children, _hover, ...props }) => {
  const router = useRouter();
  const isActive = router.pathname === to;
  const color = useColorModeValue('orange.400', 'selected');

  if (isActive) {
    return (
      <Link href={to} passHref>
        <ChakraLink
          mr={4}
          {...props}
          {...activeProps}
          color={color}
          textDecor='underline'
          {...props}
          {...activeProps}
          _hover={{ color: 'selected' }}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to} passHref>
      <ChakraLink {...props} _hover={{ color: 'orange.400' }} mr={4}>
        {children}
      </ChakraLink>
    </Link>
  );
};

export default NavLink;
