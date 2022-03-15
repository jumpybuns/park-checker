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
  Box,
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
        mx={4}
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
                spot to park at Disneyland? Well this is the service for you.
                Spend that time packing and wrangling your family and let our
                site let you know via SMS text when a spot opens up. Parking
                spots can open up at any time but they also go very quickly so
                do not miss out!
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
