import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import {
  FormLabel,
  FormControl,
  Input,
  Heading,
  Text,
  Button,
  Center,
  Container,
  Alert,
  AlertIcon,
  AlertTitle,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

const ForgotPassword = () => {
  const [loader, setloader] = useState(false);
  const toast = useToast();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setloader(true);
    console.log('submit - ' + data);
    axios
      .post(`${process.env.REACT_APP_BACKEND}/api/password/forget`, data)
      .then((res) => {
        console.log(res);
        toast({
          title: 'Please Check Your email',
          status: 'success',
          duration: 4000,
        });
        setloader(false);
      })
      .catch((err) => {
        console.log(err);
        setError('password', {
          type: 'server',
          message: err,
        });
        setloader(false);
      });
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
      <VStack p={['1rem', '1rem', '2rem']} pb={'4rem'} bgColor={'#fefbff'}>
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Reset Password
          </Heading>
          <Center py={[2, 2, 4]} w={'full'}></Center>
          <Text fontSize={'sm'} maxW={'25rem'} textAlign={'center'}>
            {' '}
            Enter the email address you've used to register with us and we'll
            send you a reset link!
          </Text>
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
              placeholder='Registered Email'
              bg={'white'}
              size={'lg'}
              borderRadius={'0'}
              {...register('email', {
                required: 'Please enter registered email',
                pattern: {
                  value:
                    /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Email is not valid',
                },
              })}
            />
            {errors.email && <AlertPop title={errors.email.message} />}
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
            Get Reset Link
          </Button>
        </form>
        <Link to='/login'>
          <Text fontSize={'sm'} py={'1rem'}>
            {' '}
            Back to Login{' '}
          </Text>
        </Link>
      </VStack>
    </Container>
  );
};
export default ForgotPassword;
