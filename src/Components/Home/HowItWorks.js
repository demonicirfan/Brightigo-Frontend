import { Container, Stack } from '@chakra-ui/react';
import React from 'react';
import Steps from './Steps';
import HowItWorksImg from './HowItWorksImg';

const HowItWorks = () => {
  return (
    <Container maxW={'8xl'} mt={'14rem'} pt={{ base: '12rem', xl: '6rem' }}>
      <Stack
        direction={{ base: 'column', xl: 'row' }}
        spacing={{ base: '10rem', md: '16rem' }}
        alignItems={'center'}
      >
        <HowItWorksImg />
        <Steps />
      </Stack>
    </Container>
  );
};

export default HowItWorks;
