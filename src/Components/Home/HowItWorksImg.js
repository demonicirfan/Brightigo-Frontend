import { Center, Box, Flex, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CircleType from 'circletype';
import { motion } from 'framer-motion';
import img from '../../Images/hero2.jpg';

const MotionCenter = motion(Center);

const HowItWorksImg = () => {
  useEffect(() => {
    const circleType = new CircleType(document.getElementById('circularText2'));
    circleType.radius(30).dir(-1);
  }, []); //empty array will run only once (after the initial render)

  return (
    <Flex flexDir={'column'} alignItems={'start'} w={'fit-content'}>
      <Box
        zIndex={'1'}
        w={{ base: '70vw', md: '450px', lg: '500px' }}
        h={{ base: '250px', md: '400px' }}
      >
        <Image
          src={img}
          alt='hero'
          w={{ base: '70vw', md: '450px', lg: '500px' }}
          h={{ base: '250px', md: '400px' }}
          objectFit={'cover'}
          overflow={'clip'}
          my={{ base: '40px', md: '60px' }}
          zIndex={'1'}
        />
        <Box>
          <Box
            _before={{
              content: `""`,
              position: 'absolute',
              width: '180px',
              height: '180px',
              background: '#44337A',
              filter: 'blur(80px)',
              zIndex: '-1',
              transform: 'translateY(-180px)',
            }}
          />
        </Box>
      </Box>

      <Center>
        <MotionCenter
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, type: 'tween' }}
          bgColor={'white'}
          rounded={'full'}
          w={{ base: '80px', md: '140px' }}
          h={{ base: '80px', md: '140px' }}
          position='absolute'
          zIndex={'2'}
          alignSelf='end'
          transform='translateY(180px)'
        >
          <Text
            fontWeight={'700'}
            fontSize={{ base: '8px', md: '14px' }}
            textTransform={'uppercase'}
            className='text'
            id='circularText2'
          >
            Register Now • Register Now •{' '}
          </Text>
        </MotionCenter>
      </Center>
    </Flex>
  );
};

export default HowItWorksImg;
