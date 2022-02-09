import {
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import icon1 from '../../Images/Icons/icon1.jpg';
import icon2 from '../../Images/Icons/icon2.jpg';
import icon3 from '../../Images/Icons/icon3.jpg';
import icon4 from '../../Images/Icons/icon4.jpg';
import icon5 from '../../Images/Icons/icon5.jpg';
import icon6 from '../../Images/Icons/icon6.jpg';

const CourseHighlight = () => {
  return (
    <VStack mt={('3rem', '6rem')}>
      <Text
        alignSelf={'center'}
        textAlign='center'
        p={'2rem'}
        fontSize={{ base: '28px', md: '42px', lg: '42px' }}
        fontFamily={'Poppins'}
        fontWeight={'500'}
        maxW={['90vw']}
      >
        How to get your dream job?
      </Text>
      <Flex
        w={'full'}
        flexDirection={'column'}
        alignItems={'center'}
        fontSize={{ base: '10px', md: 'md' }}
        px={'0.5rem'}
        gap={{ base: '1rem', md: '1rem' }}
        maxW={['90vw']}
      >
        <Center
          alignItems={'flex-start'}
          justifyContent='flex-start'
          margin={{ base: '1rem', md: '1rem', lg: '2rem' }}
          flexDirection={'row'}
          w={['90vw', '90vw', '50rem']}
          shadow='lg'
          p={['1rem 0.5rem', '1rem 0.5rem', '2rem']}
        >
          <Image
            zIndex='1'
            src={icon1}
            w={{ base: '2rem', md: '5rem' }}
            h={'auto'}
            m='1rem'
          />
          <VStack zIndex='1' pl={'1rem'}>
            <Text
              w={'full'}
              textAlign={'start'}
              fontWeight='600'
              fontSize={{ base: 'sm', md: 'xl' }}
            >
              Register for the Test
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'md' }}
              w={['60vw', 'full']}
              textAlign={'start'}
            >
              Analyze career options and schedule a test whenever you want.
            </Text>
          </VStack>
          <Center h='full' alignSelf={'flex-end'} ml='auto'>
            <Box
              zIndex={'0'}
              opacity='0.08'
              lineHeight={'0'}
              fontSize={['5xl', '5xl', '9xl']}
              transform='translateY(-12px)'
              fontWeight='800'
              position='absolute'
            >
              1
            </Box>
          </Center>
        </Center>
        <Center
          alignItems={'flex-start'}
          justifyContent='flex-start'
          margin={{ base: '1rem', md: '1rem', lg: '2rem' }}
          flexDirection={'row'}
          w={['90vw', '90vw', '50rem']}
          shadow='lg'
          p={['1rem 0.5rem', '1rem 0.5rem', '2rem']}
        >
          <Image
            src={icon2}
            w={{ base: '2rem', md: '5rem' }}
            h={'auto'}
            m='1rem'
          />
          <VStack pl={'1rem'}>
            <Text
              w={'full'}
              textAlign={'start'}
              fontWeight='600'
              fontSize={{ base: 'sm', md: 'xl' }}
            >
              Take the Assessment
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'md' }}
              w={['50vw', 'full']}
              textAlign={'start'}
            >
              Score at least 300 out of 500 on the second test to qualify for
              placement. or you must enroll in Brightigo's fast learning
              program.
            </Text>
          </VStack>
          <Center h='full' alignSelf={'flex-end'} ml='auto'>
            <Box
              zIndex={'0'}
              opacity='0.08'
              lineHeight={'0'}
              fontSize={['5xl', '5xl', '9xl']}
              transform='translateY(-12px)'
              fontWeight='800'
              position='absolute'
            >
              2
            </Box>
          </Center>
        </Center>
        <Center
          alignItems={'flex-start'}
          justifyContent='flex-start'
          margin={{ base: '1rem', md: '1rem', lg: '2rem' }}
          flexDirection={'row'}
          w={['90vw', '90vw', '50rem']}
          shadow='lg'
          p={['1rem 0.5rem', '1rem 0.5rem', '2rem']}
        >
          <Image
            src={icon4}
            w={{ base: '2rem', md: '5rem' }}
            h={'auto'}
            m='1rem'
          />
          <VStack pl={'1rem'}>
            <Text
              w={'full'}
              textAlign={'start'}
              fontWeight='600'
              fontSize={{ base: 'sm', md: 'xl' }}
            >
              Qualify the test
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'md' }}
              w={['50vw', 'full']}
              textAlign={'start'}
            >
              Interview with the best companies immediately after qualifying.
            </Text>
          </VStack>
          <Center h='full' alignSelf={'flex-end'} ml='auto'>
            <Box
              zIndex={'0'}
              opacity='0.08'
              lineHeight={'0'}
              fontSize={['5xl', '5xl', '9xl']}
              transform='translateY(-12px)'
              fontWeight='800'
              position='absolute'
            >
              3
            </Box>
          </Center>
        </Center>
        <Center
          alignItems={'flex-start'}
          justifyContent='flex-start'
          margin={{ base: '1rem', md: '1rem', lg: '2rem' }}
          flexDirection={'row'}
          w={['90vw', '90vw', '50rem']}
          shadow='lg'
          p={['1rem 0.5rem', '1rem 0.5rem', '2rem']}
        >
          <Image
            src={icon3}
            w={{ base: '2rem', md: '5rem' }}
            h={'auto'}
            m='1rem'
          />
          <VStack pl={'1rem'}>
            <Text
              w={'full'}
              textAlign={'start'}
              fontWeight='600'
              fontSize={{ base: 'sm', md: 'xl' }}
            >
              Get Hired
            </Text>
            <Text
              fontSize={{ base: 'xs', md: 'md' }}
              w={['50vw', 'full']}
              textAlign={'start'}
            >
              Hired in a leading product company in less than 12 days
            </Text>
          </VStack>

          <Center h='full' alignSelf={'flex-end'} ml='auto'>
            <Box
              zIndex={'0'}
              opacity='0.08'
              lineHeight={'0'}
              fontSize={['5xl', '5xl', '9xl']}
              transform='translateY(-12px)'
              fontWeight='800'
              position='absolute'
            >
              4
            </Box>
          </Center>
        </Center>
      </Flex>
    </VStack>
  );
};

export default CourseHighlight;
