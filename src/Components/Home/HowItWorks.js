import { Container } from '@chakra-ui/react';
import React from 'react';
import ImageHOC from '../HOC/Img.HOC';
import img from '../../Images/hero2.jpg';
import Steps from './Steps';

const HowItWorks = () => {
  return (
    <Container>
      <ImageHOC img={img} />
      <Steps />
    </Container>
  );
};

export default HowItWorks;
