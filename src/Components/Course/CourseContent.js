import {
  Flex,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import React from 'react';

const CourseContent = () => {
  return (
    <VStack py={'6rem'}>
      <Box py={'2rem'} w={'full'} mb={'1rem'}>
        <Text
          alignSelf={'start'}
          pl={'2rem'}
          fontSize={{ base: '28px', md: '42px', lg: '42px' }}
          fontFamily={'Poppins'}
          fontWeight={'500'}
        >
          Course Content
        </Text>
        <Text
          fontWeight={'300'}
          textColor={'purple.900'}
          fontWeight='400'
          pl={{ base: '2rem', md: '2.5rem' }}
          textAlign={'start'}
          alignSelf={'start'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          12 In-depth knowledge +144 hours Live Learning + Real time project
        </Text>
      </Box>
      <Flex
        w={'full'}
        flexDirection={'column'}
        alignItems={'center'}
        gap={'1rem'}
        fontSize={{ base: 'sm', md: 'md' }}
        px={{ base: '2rem', md: '6rem' }}
      >
        <Accordion
          border={'1px solid #44337A'}
          bg='purple.50'
          w={'full'}
          defaultIndex={[0]}
          allowMultiple
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Basics of Product Management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              <UnorderedList pr='1rem'>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  What is Product Management
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Expectations from a product manager
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Hard skills by Product Managers
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Different aspects in B2B B2C and B2B2C markets
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  How to interact with millions of customers at a time
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  How to set up a survey
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Tools required to setup a survey
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  What parameters are to be considered before starting a survey
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Methods to reach
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Designing, Mockups and Discussion Board Creation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              <UnorderedList pr='1rem'>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Basics of Design concept
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Ideating a design
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Wireframing and mockup
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Tools required to do wireframing
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Optimization analysis
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  UAT (User acceptance test)
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Internal and External
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  QA of Designs
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              <UnorderedList pr='1rem'>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>Prototyping</ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Heuristic Evaluation
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Cases Identified with engineering
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Heatmap Testing
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>A/B Testing</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Writing Document and tracking product roadmap
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Agile methodology
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Scrum Product Development
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Writing Awesome Product Required Document (P.R.D)
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Creation of roadmap
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Project Planning
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Creating sprints of backlog
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Tools used to maintain backlog
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Excel and Jira
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Continuous development and deployment
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Development operations
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Release management
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Final UAT with QA
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}> QA Sign off</ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Product Sign off
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Identifying continuous traffic metrics
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  {' '}
                  Frameworks used for prioritizations
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  The Product Life Cycle
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  The art of self-disruption: preserve your business by
                  embracing disruptive products (that aren’t yours){' '}
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Product adoption curves: identify where your product falls on
                  the curve and what that means for future product decisions{' '}
                </ListItem>
                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Cohort analysis
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Calculations of customers lifetimes value
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Calculations of RFM score (Recency, Frequecy, Monentization)
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Segmentations and funnel analysis
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Google analysis
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  User Behaviour analysis
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Acquisition and activation growth hacking
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Mobile App optimisation in app store
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Conversion rate calculations optimisation
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Referral and Retention hacking
                </ListItem>

                <ListItem m={['0.5rem 0rem', '0.4rem']}>
                  Engagement and monetization
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>Styles of leadership</ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Interaction with team and management
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  How to lead without authority
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Resourses optimisation
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>Product Leadership</ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Introduction to Communication Skills: Personality and
                  Behaviour in product management
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0rem', '0.4rem']}>
                  Giving and Receiving Feedback
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Why Emotional Intelligence and Social Intelligence are More
                  Significant than IQ
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Introduction to Human Factors
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Communication and Communication Breakdown
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Elements Of Non-Verbal Communication
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Marketing Analytics: Pricing Strategies and Price Analytics
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0rem', '0.4rem']}>
                  Setting a Pricing Objective
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>Estimating Demand</ListItem>

                <ListItem m={['0rem', '0.4rem']}>Estimating Costs</ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Analyzing competitors
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Evaluating Pricing Strategies
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Storytelling for Innovation
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0rem', '0.4rem']}>
                  Uncover and create a compelling customer story
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Storytelling techniques that generate excitement and buy-in
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Evaluating and telling your story
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex='1'
                  m={['0.5rem', '1rem']}
                  textAlign='left'
                  fontSize={{ base: 'sm', md: 'xl' }}
                  fontWeight='500'
                >
                  Mastering PM interview
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel
              bg='white'
              pb={4}
              textColor={'purple.900'}
              fontWeight='400'
              fontSize={{ base: 'sm', md: 'lg' }}
            >
              {' '}
              <UnorderedList pr='1rem'>
                <ListItem m={['0rem', '0.4rem']}>
                  Product Vision Questions
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Behavioural Questions
                </ListItem>

                <ListItem m={['0rem', '0.4rem']}>Estimating Questions</ListItem>

                <ListItem m={['0rem', '0.4rem']}>Upgrade Your Resume</ListItem>

                <ListItem m={['0rem', '0.4rem']}>
                  Market Yourself Online
                </ListItem>
              </UnorderedList>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </VStack>
  );
};

export default CourseContent;
