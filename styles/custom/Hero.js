import React from 'react';
import styles from '../Hero.module.css';
import { Box, Image } from '@chakra-ui/react';
const Hero = () => {
  return (
    <Box className={styles.container} w='250px'>
      <Image
        className={styles.car}
        src='/images/car.png'
        alt='car'
        w='250px'
        objectFit='fit'
      />
    </Box>
  );
};

export default Hero;
