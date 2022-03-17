import { Box, Image } from '@chakra-ui/react';
import styles from '../styles/Blob.module.css';

const Blob = () => {
  return (
    <Box
      className={styles.container}
      display='flex'
      flexDir='column'
      alignItems='center'
      w='100%'
      zIndex={0}
    >
      <Image
        className={styles.car}
        src='/images/blob.png'
        alt='car'
        w='250px'
        objectFit='fit'
        pos='absolute'
        top='-90px'
        m='auto'
      />
    </Box>
  );
};

export default Blob;
