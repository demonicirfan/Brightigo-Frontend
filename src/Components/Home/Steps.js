import { Box, Center, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Steps = () => {
  return (
    <VStack
      spacing={{ base: '4rem', md: '6rem' }}
      pl={{ base: '2rem', md: '0' }}
    >
      <Text
        maxW={'34rem'}
        fontSize={{ base: '3xl', md: '5xl' }}
        minW={'20rem'}
        alignSelf={'start'}
        fontWeight={'400'}
        fontFamily={'Playfair Display'}
      >
        How It Works
      </Text>
      <VStack
        maxW={'80vw'}
        pl={{ base: '0.3rem', sm: '0.2rem', md: '0.2rem', lg: '0' }}
        fontSize={{ base: 'md', sm: 'lg', lg: 'xl' }}
        align={'start'}
        borderLeft={'2px solid #553C9A'}
      >
        <Box
          color={'gray.400'}
          _before={{
            content: '"1"',
            padding: '0.2rem',
            minWidth: 'clamp(2rem, 6vw, 2.3rem)',
            color: 'white',
            textAlign: 'center',
            transform: 'translateX(-1.2rem)',
            backgroundColor: '#553C9A',
            position: 'absolute',
            zIndex: '1',
            rounded: 'full',
          }}
          pb={{ base: '1rem', md: '2rem' }}
          onScroll={() => console.log('scrolling')}
        >
          <Text
            maxW={'34rem'}
            ps={{ base: '2rem', md: '4rem' }}
            color={'purple.700'}
            transform={'translateY(-1rem)'}
          >
            Apply and receive company sposnered case challenges
          </Text>
        </Box>
        <Box
          _before={{
            content: '"2"',
            padding: '0.2rem',
            minWidth: 'clamp(2rem, 6vw, 2.3rem)',
            color: 'white',
            textAlign: 'center',
            transform: 'translate(-1.2rem, 0.8rem)',
            backgroundColor: '#44337a',
            position: 'absolute',
            zIndex: '1',
            rounded: 'full',
          }}
          py={{ base: '1rem', md: '2rem' }}
        >
          <Text
            maxW={'34rem'}
            ps={{ base: '2rem', md: '4rem' }}
            color={'purple.800'}
          >
            Team Up, Solve Challenges, And Receive Feedback
          </Text>
        </Box>
        <Box
          color={'gray.400'}
          _after={{
            content: '"3"',
            padding: '0.2rem',
            minWidth: 'clamp(2rem, 6vw, 2.3rem)',
            color: 'white',
            textAlign: 'center',
            transform: 'translateX(-1.2rem)',
            backgroundColor: '#322659',
            position: 'absolute',
            zIndex: '1',
            rounded: 'full',
          }}
          pt={{ base: '1rem', md: '2rem' }}
        >
          <Text
            maxW={'34rem'}
            ps={{ base: '2rem', md: '4rem' }}
            transform={{ base: 'translateY(1.5rem)', md: 'translateY(2.5rem)' }}
            color={'purple.900'}
          >
            Get Invited To Interviews.
          </Text>
        </Box>
      </VStack>
    </VStack>
  );
};

export default Steps;
