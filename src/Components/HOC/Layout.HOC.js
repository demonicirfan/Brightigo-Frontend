import {
  Button,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageHOC from './Img.HOC';
import { isAuth } from '../../Helpers/auth';
const LayoutHOC = (props) => {
  const navigate = useNavigate();
  console.log('isauth - ', !!isAuth());
  const onClickWithIsAuthFalse = () => {
    console.log('is false');
    navigate('/login');
  };
  const onClickWithIsAuthTrue = () => {
    console.log('is true');
    window.location.replace(`https://quizzs.vercel.app/${isAuth()?._id}`);
  };
  const onClickHandler = () => {
    !!isAuth() ? onClickWithIsAuthTrue() : onClickWithIsAuthFalse();
  };
  return (
    <Container maxW='8xl' mb='4rem' centerContent>
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={'6vw'}
        alignItems={'center'}
      >
        <VStack maxW={['96vw', '84vw', '80vw', '58vw']} px={'2rem'}>
          <Heading
            w='full'
            fontSize={{ base: '34px', md: '56px', lg: '64px' }}
            fontFamily={'Poppins'}
            fontWeight={'600'}
            lineHeight={{ base: '50px', md: '80px', lg: '88px' }}
          >
            {props.title}
          </Heading>
          <Text
            py={['1rem', '2rem']}
            fontSize={['sm', 'lg', 'xl']}
            fontFamily={'Poppins'}
          >
            {' '}
            {props.body}
          </Text>
          <Button
            onClick={onClickHandler}
            alignSelf={'flex-start'}
            size='lg'
            bgColor={'purple.800'}
            textColor={'white'}
            rounded={'full'}
            m={'1rem'}
            _hover={{
              bg: '#FAF5FF',
              outline: '2px solid #543B99',
              color: '#543B99',
              transition: '0.25s',
            }}
          >
            {props.button}
          </Button>
        </VStack>
        <Box m={['4rem 0rem', '2rem']}>
          <Box w={{ base: '70vw', md: '50vw', lg: '28vw' }}>
            {props.children}
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default LayoutHOC;
