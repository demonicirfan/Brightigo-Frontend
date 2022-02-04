import { useForm } from 'react-hook-form';
import React, { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
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
  Tooltip,
} from '@chakra-ui/react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { isAuth } from '../Helpers/auth';

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

const Signup = () => {
  let params = useParams();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setLoader(true);
    axios
      .put(`${process.env.REACT_APP_BACKEND}/api/password/reset`, {
        resetPasswordLink: params.token,
        newPassword: data.password,
      })
      .then((res) => {
        console.log(res);
        toast({
          title: res.data.message,
          status: 'success',
          duration: 4000,
        });
        setLoader(false);
        navigate('/login');
      })
      .catch((err) => {
        console.log('error is ' + err);
        toast({
          title: err.response.data.error,
          status: 'error',
          duration: 4000,
        });
        setLoader(false);
      });
  };

  return (
    <Container
      mb={'8rem'}
      w={'80vw'}
      maxW={'xl'}
      minW={'fit-content'}
      px={['2rem', '2rem', '3rem', '5rem']}
      py={'2rem'}
      pb={'0'}
      mx={'auto'}
      bgColor={'#fefbff'}
      borderBottom={'3px solid'}
      borderColor={'purple.800'}
    >
      {isAuth() ? <Navigate replace to='/' /> : null}
      <VStack
        mb={'6rem'}
        p={['1rem', '1rem', '2rem']}
        pb={'4rem'}
        bgColor={'#fefbff'}
      >
        <Center my={'1rem'} flexDirection={'column'}>
          <Heading fontWeight={'400'} mb={'0.5rem'} letterSpacing={'wider'}>
            Reset Password
          </Heading>
          <Text fontSize={'sm'} maxW={'18rem'} textAlign={'center'} my={'1rem'}>
            Your New Password Must be Different from Previous used Password
          </Text>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>Password</FormLabel>
            <Tooltip
              label='Minimum 8 Charackters, including UPPER/lowercase and numbers'
              hasArrow
              arrowSize={8}
              placement='top'
              closeOnClick={false}
              bg='pink.600'
            >
              <InputGroup>
                <Input
                  mb={'1rem'}
                  borderRadius={'0'}
                  bg={'white'}
                  size={'lg'}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Password'
                  {...register('password')}
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
            </Tooltip>
            {errors.password && <AlertPop title={errors.password.message} />}
          </FormControl>
          <FormControl
            py={'1rem'}
            w={{ base: '15rem', sm: '18rem', md: '25rem' }}
            isRequired
          >
            <FormLabel fontSize={{ base: 'md', md: 'xl' }}>
              Confirm Password
            </FormLabel>
            <InputGroup>
              <Input
                mb={'1rem'}
                borderRadius={'0'}
                bg={'white'}
                size={'lg'}
                type={showPassword ? 'text' : 'password'}
                placeholder='Confirm Password'
                {...register('confirmPassword')}
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
            {errors.passwordConfirm && (
              <AlertPop title={errors.passwordConfirm.message} />
            )}
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
            Save
          </Button>
        </form>
        <Text fontSize={'sm'} py={'1rem'}>
          {' '}
          Back to{' '}
          <Text as='span' textColor={'blue.400'} fontWeight={'500'}>
            <Link to='/login'>Signup</Link>
          </Text>{' '}
          Page
        </Text>
      </VStack>
    </Container>
  );
};
export default Signup;
