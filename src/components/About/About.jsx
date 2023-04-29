import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { RiSecurePaymentFill } from 'react-icons/ri';
  import { Link } from 'react-router-dom';
  import introVideo from '../../assests/videos/intro.mp4';
  import termsAndCondition from '../../assests/docs/termsAndConditions';

  
import sg from '../../assests/images/shiv.jpg';
const Founder = ()=>(
    <Stack direction={["column","row"]}
    spacing={["4","16"]}
    padding={"8"}
    >
        <VStack>
            <Avatar src={sg}
            boxSize={["40","48"]} />
            <Text children="Co-Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={"center"} alignItems={["center","flex-start"]}>
            <Heading children="Shivam Kumar" size={["md","xl"]} />
            <Text 
            textAlign={["center","left"]}
            children={"MEP Fitness was formed by group of like minded athletes back in 2022. Since then it has trained thousands of individuals including athletes and champions to fulfil their dreams in combat sports."}
            />
        </VStack>

    </Stack>
)

const VideoPlayer = () => (
    <Box>
      <video
        autoPlay
        loop
        muted
        controls
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        src={introVideo}
      ></video>
    </Box>
);
const TandC = ({ termsAndCondition }) => (
    <Box>
      <Heading
        size={'md'}
        children="Terms & Condition"
        textAlign={['center', 'left']}
        my="4"
      />
  
      <Box h="sm" p="4" overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my="4"
          size={'xs'}
          children="Refund only applicable for cancellation within 7 days."
        />
      </Box>
    </Box>
  );
  
  
const About = () => {
  return (
    <Container maxWidth={"container.lg"} padding="16" boxShadow={"lg"}>
        <Heading children="About Us" textAlign={["center", "left"]}/>
        <Founder />
        <Stack m="4" direction={["column","row"]} alignItems="center">
            <Text fontFamily={"cursive"} textAlign={["center","left"]}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, nisi esse nesciunt ducimus dolorum autem officia eum inventore doloremque pariatur atque facere assumenda veritatis illo consequatur saepe? Corporis ipsam, rerum incidunt, saepe debitis unde quae quam voluptatem doloremque, quibusdam numquam!
            </Text>
            <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="yellow">
            Checkout Our Plan
          </Button>
        </Link>

        </Stack>
        <VideoPlayer />
        <TandC termsAndCondition={termsAndCondition} />

      <HStack my="4" p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily="sans-serif"
          textTransform={'uppercase'}
          backgroundColor={"yellow"}
          children={'Payment is secured by Razorpay'}
        />
      </HStack>

    </Container>
    
  )
}

export default About
