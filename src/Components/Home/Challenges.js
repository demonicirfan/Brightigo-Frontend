import { Container, Stack, Text, Box } from '@chakra-ui/react';
import React from 'react';
import ChallengesCarousel from './ChallengesCarousel';

const Challenges = () => {
  return (
    <Container
      maxW={'8xl'}
      my={{ base: '6rem', md: '14rem' }}
      pt={{ base: '0rem', xl: '6rem' }}
    >
      <Stack
        direction={{ base: 'column-reverse', xl: 'row' }}
        spacing={{ base: '6rem', md: '16rem' }}
        alignItems={'center'}
      >
        <Box >
          <Text
            w={{ base: '60vw', md: '34rem' }}
            fontSize={{ base: '3xl', md: '5xl' }}
            alignSelf={'start'}
            fontWeight={'500'}
          >
            Work on real-world product chanllenges
          </Text>
          <Text
            my={'2rem'}
            w={{ base: '80vw', md: '34rem' }}
            fontSize={{ base: 'sm', md: 'md' }}
            alignSelf={'start'}
            fontWeight={'400'}
          >
            Build your skills by working on real-world problems faced by
            companies, add experience to your resume, and get hired. Companies
            review your challenges and your performance.
          </Text>
        </Box>
        <ChallengesCarousel />
      </Stack>
    </Container>
  );
};

export default Challenges;
