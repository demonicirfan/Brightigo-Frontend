import {
  Center,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
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
    <VStack>
      <Text
        alignSelf={'start'}
        p={'2rem'}
        fontSize={{ base: '28px', md: '42px', lg: '42px' }}
        fontFamily={'Poppins'}
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
        gap={{ base: '3rem', md: '1rem' }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent={'space-around'}
          alignItems={'baseline'}
          w={'full'}
          spacing={{ base: '3rem', md: '1rem' }}
        >
          <Center
            alignItems={'flex-start'}
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'row'}
            maxW='30rem'
          >
            <Image
              src={icon1}
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
                Preparation for Extensive Interviews
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                w={'full'}
                textAlign={'start'}
              >
                Our in-depth examination of case studies posed during interviews
                with executives from leading product companies will prepare you
                to ace even the most difficult interviews!
              </Text>
            </VStack>
          </Center>
          <Center
            alignItems={'flex-start'}
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'row'}
            maxW='30rem'
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
                Create a Custom Application
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                w={'full'}
                textAlign={'start'}
              >
                Build your own application to boost your resume! Discover how to
                use no-code tools to transform your product vision into a
                consumer application.
              </Text>
            </VStack>
          </Center>
        </Stack>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent={'space-around'}
          alignItems={'baseline'}
          w={'full'}
          spacing={{ base: '3rem', md: '1rem' }}
        >
          <Center
            alignItems={'flex-start'}
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'row'}
            maxW='30rem'
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
                Rapid Progress from Zero to One
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                w={'full'}
                textAlign={'start'}
              >
                Begin as a newbie and progress to an expert! Cover all critical
                product management concepts and develop a thorough understanding
                of the product management role.
              </Text>
            </VStack>
          </Center>
          <Center
            alignItems={'flex-start'}
            margin={{ base: '0rem', md: '1rem', lg: '2rem' }}
            flexDirection={'row'}
            maxW='30rem'
          >
            <Image
              src={icon6}
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
                Preparation for Placement
              </Text>
              <Text
                fontSize={{ base: 'xs', md: 'md' }}
                w={'full'}
                textAlign={'start'}
              >
                Enhance your resume and soft skills to position yourself for
                success in the industry. Receive access to product manager job
                openings at more than 50 Brightigo partner companies.
              </Text>
            </VStack>
          </Center>
        </Stack>
      </Flex>
    </VStack>
  );
};

export default CourseHighlight;
