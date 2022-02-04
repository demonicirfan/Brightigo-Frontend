import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import { GoogleLogin } from 'react-google-login';
import {
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Box,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  useToast,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { authenticate, isAuth } from '../Helpers/auth';

const AlertPop = (props) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      <AlertTitle mr={4} textColor={'red'} fontWeight={'500'}>
        {props.title}
      </AlertTitle>
    </Alert>
  );
};

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [loaderGoogle, setLoaderGoogle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    setLoader(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/login`, data)
      .then((res) => {
        toast({
          title: 'Login Successful',
          status: 'success',
          duration: 3000,
        });

        //successfully logedin
        authenticate(res);
        //setLoader(false);
        navigate('/');
      })
      .catch((err) => {
        // setValue({});
        console.log(err);
        if (err.response.data.at == 'password') {
          setError('password', {
            type: 'server',
            message: err.response.data.errors,
          });
          setLoader(false);
        }
        if (err.response.data.at == 'email') {
          setError('email', {
            type: 'server',
            message: err.response.data.errors,
          });
          setLoader(false);
        }
      });
    setLoader(false);
  };

  const googleSuccess = (tokenId) => {
    setLoaderGoogle(true);
    console.log(tokenId.tokenId);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/googlelogin`, {
        idToken: tokenId.tokenId,
      })
      .then((res) => {
        toast({
          title: 'Google Login Success',
          status: 'success',
          duration: 3000,
        });
        setLoaderGoogle(false);
        //successfully logedin
        authenticate(res);
        //window.location.replace('https://brightigo.xyz');
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: 'Google Login Error',
          status: 'error',
          duration: 3000,
        });
        setLoaderGoogle(false);
      });
  };

  const googleFailure = (response) => {
    console.log(response);
  };

  return (
    <Container
      mb={'6rem'}
      w={'80vw'}
      maxW={'xl'}
      minW={'fit-content'}
      px={['2rem', '2rem', '3rem', '5rem']}
      py={'2rem'}
      mx={'auto'}
      bgColor={'#fefbff'}
      borderBottom={'3px solid'}
      borderColor={'purple.800'}
    >
      {isAuth() ? <Navigate replace to='/home' /> : null}
      <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'} bgColor={'#fefbff'}>
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Login
          </Heading>
          <Center py={[2, 2, 4]} w={'full'}>
            <GoogleLogin
              clientId='185902963184-6ojahsp82t3sbs7j1r2nll8r54g5uv61.apps.googleusercontent.com'
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy={'single_host_origin'}
              render={(renderProps) => (
                <Button
                  px={16}
                  border={'none'}
                  borderRadius={'0'}
                  w={{ base: '15rem', sm: '18rem', md: '25rem' }}
                  h={'3.5em'}
                  maxW={'md'}
                  variant={'outline'}
                  leftIcon={<FcGoogle size='1.85em' />}
                  bg={'white'}
                  _hover={{
                    bgColor: 'gray.100',
                  }}
                  onClick={renderProps.onClick}
                  isLoading={loaderGoogle}
                >
                  <Center
                    fontWeight={'500'}
                    fontSize={{ base: 'md', md: 'lg' }}
                    pl={'0.5rem'}
                  >
                    <Text textColor={'gray.500'}>login with Google</Text>
                  </Center>
                </Button>
              )}
            />
          </Center>
          <Text fontSize={'sm'}> or login with registered email </Text>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            pt={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Email</FormLabel>
            <Input
              mb={'1rem'}
              type='text'
              placeholder='Email'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('email', {
                required: 'Please enter registered email',
                pattern: {
                  value:
                    /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Enter a valid email',
                },
              })}
            />
            {errors.email && <AlertPop title={errors.email.message} />}
          </FormControl>

          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Password</FormLabel>
            <InputGroup>
              <Input
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                size={'lg'}
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                {...register('password', {
                  required: 'Please enter Password',
                })}
              />
              <InputRightElement>
                <Box
                  flex={'1'}
                  mt={'6px'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  h='1.5rem'
                  size={'lg'}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <ViewOffIcon w={6} h={6} color={'purple.600'} />
                  ) : (
                    <ViewIcon w={6} h={6} color={'purple.600'} />
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>
            {errors.password && <AlertPop title={errors.password.message} />}
          </FormControl>
          <Button
            mt={'1rem'}
            type='submit'
            size='md'
            w={'100%'}
            fontSize={'lg'}
            fontWeight={'500'}
            rounded='none'
            color={'white'}
            bg={'purple.800'}
            _hover={{
              bg: '#543B99',
              color: 'white',
            }}
            _active={{
              bg: '#543B99',
              color: 'white',
            }}
            isLoading={loader}
          >
            Login
          </Button>
        </form>
        <Link to='/users/password/forget'>
          <Text
            fontSize={'sm'}
            py={'1rem'}
            _hover={{ textDecoration: 'underline' }}
          >
            {' '}
            Forgot Password{' '}
          </Text>
        </Link>

        <Link to='/register'>
          <Text fontSize={'md'} py={'1rem'}>
            Dont have an acount{' '}
            <Text
              as='span'
              textColor={'blue.500'}
              _hover={{ textDecoration: 'underline' }}
            >
              SignUp
            </Text>
          </Text>
        </Link>
      </VStack>
    </Container>
  );
};
export default Login;
