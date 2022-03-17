import { Button } from '@chakra-ui/react';

const DisneyButtonFilled = ({ text, onClick }) => {
  return (
    <Button
      w={52}
      as='a'
      display='flex'
      justifyContent='center'
      textAlign='center'
      borderRadius={50}
      borderColor='blue.500'
      border='3px'
      bgColor='blue.500'
      shadow='md'
      color='whiteAlpha.900'
      transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
      onClick={() => onClick()}
      _hover={{
        bgColor: 'blue.400',
        cursor: 'pointer',
        borderColor: 'blue.400',
      }}
    >
      {text}
    </Button>
  );
};

export default DisneyButtonFilled;
