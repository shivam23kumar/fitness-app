import {
    Button,
    Container,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';

const Forgetpassword = () => {
    const [email, setEmail] = useState("");
    return (
    <Container h={"70vh"}>
        <form action="">
            <Heading 
            children="Forget Password" 
            my="16" 
            textAlign="center"
            textTransform={"uppercase"} 
            alignItem={["center","left"]}/>
            <VStack spacing={"8"}>
                <Input 
                required
                id="email"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                type={"email"}
                focusBorderColor="yellow.500"/>
                <Button type="submit" w={"full"} colorScheme="yellow">Send Reset Link</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default Forgetpassword
