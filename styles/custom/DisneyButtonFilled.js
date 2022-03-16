import { Button } from '@chakra-ui/react';

const DisneyButtonFilled = ({ text, href }) => {
  return (
    <Button
      w={52}
      href={href}
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
      _hover={{
        bgColor: 'blue.600',
        cursor: 'pointer',
        borderColor: 'blue.600',
      }}
    >
      {text}
    </Button>
  );
};

export default DisneyButtonFilled;
