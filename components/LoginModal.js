import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useEffect } from 'react';

const LoginModal = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
      >
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
        <ModalContent color='gray.800'>
          <ModalHeader>
            Welcome to the Disneyland Parking Spot Checker Website
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align='flex-start'>
              <Text>
                Are you tired of refreshing your browser all day just to find a
                spot to park on your vacation to Disneyland? Well this is the
                service for you. Spend that time packing and getting ready to go
                and wait for the text alert on your phone to let you know when a
                spot opens up. Parking spots open up all the time! But they also
                go very quickly so do not miss out!
              </Text>
              <FormControl>
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <Input id='email' type='email' />
                <FormHelperText>
                  We&apos;ll never share your email.
                </FormHelperText>
                <FormLabel
                  htmlFor='password'
                  display='flex'
                  justifyContent='left'
                >
                  Password
                </FormLabel>
                <Input id='password' type='password' />
                <Button my={2}>Login</Button>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>Thank You</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
