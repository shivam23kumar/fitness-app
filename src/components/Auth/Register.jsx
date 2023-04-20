import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


export const fileUploadCss={
  cursor:"pointer",
    marginLeft:"-5%",
    width:"110%",
    border:"none",
    color:"#ECC94B",
    height:"100%",
    backgroundColor:"white"
}
export const fileuploadstyle={
  "&::file-selector-button":fileUploadCss
}
  
  const Register = () => {
      const [email, setEmail] = useState("");
      const [name, setName] = useState("");
      const [password, setPassword] = useState("");
      const [imagePrev, setImageprev] = useState("");
      const [image, setImage] = useState("");


      const changeImageHandler = (e)=>{
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend=()=>{
          setImageprev(reader.result);
          setImage(file);
        }
      }
    return (
      <Container h={'140vh'}>
          <VStack h={'full'} justifyContent="center" spacing={'4'}>
  
              <Heading textTransform={"uppercase"} children={"Register"} />
              <form style={{width:"100%"}}>

                  <Box my={"4"} display="flex" justifyContent="center">
                    <Avatar src={imagePrev} size={"2xl"}/>
                  </Box>
                  <Box my={"4"}>
                      <FormLabel htmlFor="name" children="Name"/>
                      <Input 
                      required
                      id="name"
                      onChange={e=>setName(e.target.value)}
                      placeholder="abc"
                      type={"text"}
                      focusBorderColor="yellow.500"
                      />
                  </Box>
                  <Box my={"4"}>
                      <FormLabel htmlFor="password" children="Password"/>
                      <Input 
                      required
                      id="password"
                      onChange={e=>setPassword(e.target.value)}
                      placeholder="Enter your password"
                      type={"password"}
                      focusBorderColor="yellow.500"
                      />
                  </Box>
                  <Box my={"4"}>
                      <FormLabel htmlFor="password" children="Password"/>
                      <Input 
                      required
                      id="password"
                      onChange={e=>setPassword(e.target.value)}
                      placeholder="Enter your password again"
                      type={"password"}
                      focusBorderColor="yellow.500"
                      />
                  </Box>

                  <Box my={"4"}>
                      <FormLabel htmlFor="chooseAvatar" children="Choose Avatar"/>
                      <Input 
                      required
                      id="chooseAvatar"
                      accept="image/*"
                      type={"file"}
                      focusBorderColor="yellow.500"
                      css={fileuploadstyle}
                      onChange={changeImageHandler}
                      />
                  </Box>
                  
                  <Button my="4" colorScheme={"yellow"} type="submit">Signup</Button>
                  <Box my="4">
                    Already Signed Up? <Link to="/login"><Button colorScheme={"yellow"} variant="link">Sign In</Button>{" "}</Link>
                </Box>
              </form>
          </VStack>
      </Container>
    )
  }

export default Register
