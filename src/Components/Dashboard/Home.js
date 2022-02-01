import React, { useEffect, useState } from 'react';
import { isAuth } from '../../Helpers/auth';
import { Container, Text, Box } from '@chakra-ui/react';
import axios from 'axios';

const DashboardHome = () => {
  const [score, setScore] = useState('Loading...');
  const [percentage, setPercentage] = useState('...');
  const [grade, setGrade] = useState('...');
  const { name, _id } = isAuth();
  const firstName = name.split(' ').slice(0, -1).join(' ');

  const quizlink = `${process.env.REACT_APP_TAKE_TEST}/${_id}`;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND}/api/user/${_id}`)
      .then((res) => {
        //console.log('user res at dashboard - ', res.data.test.score);
        setScore(res.data.test.score);
        setPercentage(res.data.test.percentage);
        setGrade(res.data.test.grade);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Container mt={'2rem'} pl={{ base: '0', md: '4rem' }}>
      {score >= 0 ? (
        <>
          <Text fontSize={{ base: '3xl', md: '5xl' }}>
            Welcome Back,{' '}
            <Text as='span' fontWeight={'600'}>
              {firstName}
            </Text>
          </Text>
          <Box pt={'1rem'}>
            <Text as='span'>Last Test Score</Text>
            <Text fontSize={'2xl'} as='span'>
              {' '}
              {score}/15
            </Text>
            <br />
            <Text as='span'>Percentage - </Text>
            <Text fontSize={'2xl'} as='span'>
              {' '}
              {percentage}
            </Text>
            <br />
            <Text as='span'>Grade - </Text>
            <Text fontSize={'2xl'} as='span'>
              {' '}
              {grade}
            </Text>{' '}
          </Box>
        </>
      ) : (
        <>
          <Text fontSize={{ base: '3xl', md: '5xl' }}>
            Welcome{' '}
            <Text as='span' fontWeight={'600'}>
              {firstName}
            </Text>
          </Text>
          <Box py={'1rem'} fontSize={'xl'}>
            <Text as='span'>
              Know if you can be the next product manager at Google{' '}
            </Text>
            <Box as='a' href={quizlink} textDecoration={'underline'}>
              Take a text
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
};

export default DashboardHome;
