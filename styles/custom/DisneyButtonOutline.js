import { Button } from '@chakra-ui/react';

const DisneyButtonOutline = ({ text, onClick }) => {
  return (
    <Button
      w={52}
      as='a'
      display='flex'
      justifyContent='center'
      textAlign='center'
      borderRadius={50}
      borderColor='blue.600'
      border='2px'
      bg='whiteAlpha.900'
      color='blue.600'
      shadow='md'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      onClick={() => onClick()}
      _hover={{
        color: 'whiteAlpha.900',
        bg: 'blue.400',
        borderColor: 'blue.400',
        cursor: 'pointer',
      }}
    >
      {text}
    </Button>
  );
};

export default DisneyButtonOutline;
