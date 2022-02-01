import { Container, Stack, Text } from '@chakra-ui/react';
import React, { useCallback, useEffect, useState } from 'react';

const names = [
  {
    name: 'Google',
    heading: 'Design a product for Google Photos',
    body: 'You’re a PM on Google Photos and you notice that a lot of Google Photos users take photos at the same tourist locations (E.g. Taj Mahal lookout point). Design a product in the Google ecosystem that creates a better experience for these users.',
  },
  {
    name: 'Zomato',
    heading: 'Product Manager at Zomato',
    body: 'Youre the PM for Zomato. How would you decide whether or not provide discount to the new customer or existing customer?',
  },
  {
    name: 'Binanace',
    heading: 'Design a new product For Binance',
    body: 'Binance, one of the worlds largest cryptocurrency exchanges, is considering banning US traders in an effort to gain favor with the US government and to improve its reputation as a legitimate enterprise. Design a new product for Binance to make up for the loss of revenue (approx. 15% loss) they will incur from this move.',
  },
  {
    name: 'Flipkart',
    heading: 'How would handle negative user feedback',
    body: 'How would you handle negative user feedback about Flipkart, and how might you address it with the engineering team?',
  },
];
var i = 1;

const ChallengesCarousel = () => {
  const [newName, setnewName] = useState('Flipkart');
  const [newHeading, setNewHeading] = useState(
    'How would handle negative user feedback'
  );
  const [newBody, setNewBody] = useState(
    'How would you handle negative user feedback about Flipkart, and how might you address it with the engineering team?'
  );

  const shuffle = useCallback(() => {
    const index = i % 4;
    i++;
    setnewName(names[index].name);
    setNewBody(names[index].body);
    setNewHeading(names[index].heading);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 3000);

    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <Container
      maxW={'8xl'}
      alignSelf={'center'}
      my={{ base: '2rem', md: '8rem' }}
      pt={{ base: '2rem', xl: '6rem' }}
    >
      <Stack
        minH={'19rem'}
        w={{ base: '80vw', md: '28rem' }}
        p={'2rem'}
        textColor={'white'}
        backgroundColor={'purple.800'}
        m={'auto'}
        fontSize={{ base: 'md', md: 'xl' }}
        alignItems='start'
      >
        <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight={'600'}>
          {newName}
        </Text>
        <Text>{newHeading}</Text>
        <Text fontSize={{ base: '10px', md: 'sm' }}>{newBody}</Text>
      </Stack>
    </Container>
  );
};

export default ChallengesCarousel;
