import React from 'react'
import {Stack, Box, Text, VStack,HStack, Image, Heading, Button} from "@chakra-ui/react";
import "./home.css";
import {Link} from "react-router-dom";
import vg from "../../assests/images/bg.png";
import {CgGoogle, CgYoutube} from "react-icons/cg";
import {SiCoursera, SiUdemy} from "react-icons/si";
import {DiAws} from "react-icons/di";
import vid from "../../assests/videos/intro.mp4";



const home = () => {
  return <section className="home">
  <div className="container">
    <Stack
      direction={['column', 'row']}
      height="100%"
      justifyContent={['center', 'space-between']}
      alignItems="center"
      spacing={['16', '56']}
    >
      <VStack
        width={'full'}
        alignItems={['center', 'flex-end']}
        spacing="8"
      >
        <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
        <Text
          fontSize={'2xl'}
          fontFamily="cursive"
          textAlign={['center', 'left']}
          children="Find Valuable Content At Reasonable Price"
        />
        <Link to="/courses">
          <Button size={'lg'} colorScheme="yellow">
            Explore Now
          </Button>
        </Link>
      </VStack>

      <Image
        className="vector-graphics"
        boxSize={'md'}
        src={vg}
        objectFit="contain"
      />
    </Stack>
  </div>

  <Box padding={'8'} bg="blackAlpha.800">
    <Heading
      textAlign={'center'}
      fontFamily="body"
      color={'yellow.400'}
      children="OUR BRANDS"
    />
    <HStack
      className="brandsBanner"
      justifyContent={'space-evenly'}
      marginTop="4"
    >
      <CgGoogle />
      <CgYoutube />
      <SiCoursera />
      <SiUdemy />
      <DiAws />
    </HStack>
  </Box>

  <div className="container2">
    <video autoPlay
    controls 
    controlsList="nodownload nofullscreen noremoteplayback"
    disablePictureInPicture
    disableRemotePlayback
    src={vid}>

    </video>
  </div>
</section>

}

export default home
