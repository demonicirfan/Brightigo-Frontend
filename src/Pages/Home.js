import { Box, Center, Text, Heading } from '@chakra-ui/react';
import React from 'react';
import LayoutHOC from '../Components/HOC/Layout.HOC';
import HeroImage from '../Images/hero1.jpg';
import Testimonials from '../Components/Testimonials/Testimonials';
import HowItWorks from '../Components/Home/HowItWorks';
import Brands from '../Components/Home/Brands';
import Challenges from '../Components/Home/Challenges';

const Home = () => {
  return (
    <>
      <LayoutHOC
        title='Take Your Carrier To The Next Level.'
        body='Learn from the best minds in the industry and make yourself ready for the real world of Product Management.'
        img={HeroImage}
        onClickFunction={() => window.alert('button Clicked from home')}
        button='Take a Test'
      />
      <Center bg={'white'} w={'full'}>
        {' '}
        <Brands />
      </Center>
      <Center bg={'white'} w={'full'}>
        <Box maxW={'7xl'} mx={'auto'}>
          <HowItWorks />
          <Challenges />
        </Box>
      </Center>

      <Box mx={'auto'} maxW='7xl'>
        <Box w={'fit-content'} mt={'6rem'} ml={'2rem'}>
          <Heading
            w={{ base: '60vw', md: '34rem' }}
            fontSize={{ base: '3xl', md: '5xl' }}
            alignSelf={'start'}
            fontWeight={'400'}
            fontFamily={'Playfair Display'}
          >
            Success Stories
          </Heading>
          <Text
            mt={'1rem'}
            w={{ base: '80vw', md: '34rem' }}
            fontSize={{ base: 'sm', md: 'md' }}
            alignSelf={'start'}
            fontWeight={'400'}
          >
            Build yoru skills by working on real world problems faced by
            Companies.
          </Text>
        </Box>
      </Box>
      <Testimonials />
    </>
  );
};

export default Home;
