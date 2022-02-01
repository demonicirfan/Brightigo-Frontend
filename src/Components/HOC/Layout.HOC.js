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
    <Container maxW='8xl' centerContent pb={{ base: '4rem', xl: '0' }}>
      <Flex
        flexDirection={{ base: 'column-reverse', xl: 'row' }}
        gap={'10vw'}
        alignItems={'center'}
      >
        <VStack maxW={'600px'} px={'2rem'}>
          <Heading
            fontSize={{ base: '44px', md: '56px', lg: '76px' }}
            fontFamily={'Playfair Display'}
            fontWeight={'light'}
            lineHeight={{ base: '50px', md: '80px', lg: '100px' }}
          >
            {props.title}
          </Heading>
          <Text
            py={'2rem'}
            fontSize={['md', 'lg', 'xl']}
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
            rounded={'0'}
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
        <Box m={'2rem'}>
          <ImageHOC img={props.img} />
        </Box>
      </Flex>
    </Container>
  );
};

export default LayoutHOC;
