import { Center, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import icon1 from '../../Images/Icons/icon1.jpg';
import icon2 from '../../Images/Icons/icon2.jpg';
import icon3 from '../../Images/Icons/icon3.jpg';
import icon4 from '../../Images/Icons/icon4.jpg';
import icon5 from '../../Images/Icons/icon5.jpg';
import icon6 from '../../Images/Icons/icon6.jpg';

const CourseHighlight = () => {
  return (
    <VStack>
      <Text
        alignSelf={'start'}
        p={'2rem'}
        fontSize={{ base: '28px', md: '42px', lg: '42px' }}
        fontFamily={'Playfair Display'}
        fontWeight={'500'}
      >
        Course Highlight
      </Text>
      <Flex
        w={'full'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'1rem'}
        fontSize={{ base: '10px', md: 'md' }}
        px={'0.5rem'}
      >
        <HStack
          justifyContent={'space-around'}
          alignItems={'baseline'}
          w={'full'}
        >
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon1}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              60+ Hours of Learning
            </Text>
          </Center>
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon2}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              5+ Case Studies and Assignments
            </Text>
          </Center>
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon3}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              Personalized
            </Text>
          </Center>
        </HStack>
        <HStack
          justifyContent={'space-around'}
          alignItems={'baseline'}
          w={'full'}
        >
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon4}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              360 degree placement asisstance
            </Text>
          </Center>
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon5}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              One on one mentorship from Product Experts
            </Text>
          </Center>
          <Center
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'column'}
          >
            <Image
              src={icon6}
              w={{ base: '2rem', md: '4rem' }}
              h={'auto'}
              m='1rem'
            />
            <Text
              w={{ base: '6rem', md: '10rem' }}
              maxW={{ base: '6rem', md: '10rem' }}
              textAlign={'center'}
            >
              Mock interviews with industry leaders
            </Text>
          </Center>
        </HStack>
      </Flex>
    </VStack>
  );
};

export default CourseHighlight;
