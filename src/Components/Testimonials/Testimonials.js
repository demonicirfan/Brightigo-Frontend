import React from 'react';
import {
  Box,
  Heading,
  Text,
  Avatar,
  Center,
  VStack,
  HStack,
  Image,
  Wrap,
} from '@chakra-ui/react';
import t1 from '../../Images/testimonials/t1.jpg';
import t2 from '../../Images/testimonials/t2.png';
import t3 from '../../Images/testimonials/t3.png';
import t4 from '../../Images/testimonials/t4.png';
import t5 from '../../Images/testimonials/t5.png';
import t6 from '../../Images/testimonials/t6.png';
import t8 from '../../Images/testimonials/t8.png';
import t9 from '../../Images/testimonials/t9.png';

export default function CaptionCarousel() {
  const cards = [
    {
      name: 'Siddharth Arugula',
      about: 'Account Manager to Associate Product',
      about2: 'Current package 10.5 Lpa',
      score: 210,
      placedIn: 28,
      educationBG: 'B.tech In Biotech',
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      url: t1,
    },
    {
      name: 'Anmol Wadhwa',
      about: 'Field Sales Executive to Product Manager at Quor',
      about2: 'Placement Package 6.25 lpa',
      score: 220,
      placedIn: 18,
      educationBG: ' BBA (IPU)',
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      url: t2,
    },
    {
      name: 'Abhinav Yadav',
      about: 'Organic Growth Executive to Associate Product Manager at Songdew',
      about2: 'Placement Package 7.25 LPA',
      score: 206,
      placedIn: 25,
      educationBG: 'B.Tech',
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      url: t4,
    },
    {
      name: 'Roddsi Sarkar',
      about: 'Java full stack developer to Product Analyst in Flyo',
      about2: 'Placement Package 8 LPA',
      score: 219,
      placedIn: 16,
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      educationBG: 'B.Tech In electronic communication',
      url: t3,
    },
    {
      name: 'Sherin Joseph',
      about: 'Software test engineer to Product Manager in Bajaj Finserv',
      about2: 'Placement Package 11 LPA',
      score: 240,
      placedIn: 27,
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      educationBG: 'B.E IN COMPUTER SCIENCE',
      url: t5,
    },
    {
      name: 'Parth Agarwal',
      about: 'Product Management Intern at Gupshup',
      about2: 'Internship Package 30K INR',
      score: 299,
      placedIn: 20,
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      educationBG: 'B.Tech',
      url: t6,
    },
    {
      name: 'Shripad Kadekodi',
      about:
        'Software development engineer to Associate Product Manager in Fisdom',
      about2: 'Internship Package 13 LPA',
      score: 265,
      placedIn: 21,
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      educationBG: 'BE Computer scienc',
      url: t8,
    },
    {
      name: 'Arun Sharma',
      about: 'Business Analyst to Assistant Product Manager at Firstcry',
      about2: 'Internship Package 14 LPA',
      score: 219,
      placedIn: 28,
      body: 'I want to thank the whole Prepleaf team for the guidance they provided. And to all the Mentors, especially Priyansh, Ajay, Randheer and Drishti who helped me anytime I needed. The best thing about the Prepleaf is the People you will meet here, including batchmates who will help you prepare better and motivate you towards your goal. And Special thanks to Aman, for everything he has done for me and the students!',
      educationBG: 'MBA International',
      url: t9,
    },
  ];

  return (
    <Box my={['4rem', '8rem']}>
      <Wrap justify='center' px='1rem' mx='auto' maxW={'9xl'} spacing='2rem'>
        {cards.map((card) => (
          <VStack
            alignItems={'start'}
            bg='white'
            rounded='md'
            p='2rem'
            shadow={'xl'}
            h='fit-content'
          >
            <HStack alignItems={'start'}>
              <Avatar size='lg' name={card.name} src={card.url} />
              <VStack alignItems={'start'} maxW='15rem'>
                <Text fontSize={['md', 'xl']}>{card.name}</Text>
                <Text fontSize={['xs', 'sm']} textColor={'purple.700'}>
                  {card.about}
                </Text>
              </VStack>
            </HStack>
            <Text fontSize={['xs', 'md']} maxW='26rem' pt='1rem'>
              {card.body}
            </Text>
          </VStack>
        ))}
      </Wrap>
    </Box>
  );
}
