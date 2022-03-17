import React from 'react';
import styles from '../styles/Hero.module.css';
import { Box, Image } from '@chakra-ui/react';
const Hero = () => {
  return (
    <Box className={styles.container} w='100%' zIndex={2}>
      <Image
        className={styles.car}
        src='/images/car.png'
        alt='car'
        w='250px'
        objectFit='fit'
        m='auto'
      />
    </Box>
  );
};

export default Hero;
