import {
    Button,
    Container,
    Heading,
    Input,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { useDispatch } from 'react-redux';

const Resetpassword = () => {
    const [password, setPassword] = useState("");
    return (
    <Container h={"70vh"}>
        <form action="">
            <Heading 
            children="Reset Password" 
            my="16" 
            textAlign="center"
            textTransform={"uppercase"} 
            alignItem={["center","left"]}/>
            <VStack spacing={"8"}>
                <Input 
                required
                id="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="Enter new password"
                type={"password"}
                focusBorderColor="yellow.500"/>
                <Input 
                required
                id="password"
                value={password}
                onChange={e=>setPassword(e.target.value)}
                placeholder="Re-enter new password"
                type={"password"}
                focusBorderColor="yellow.500"/>
                <Button type="submit" w={"full"} colorScheme="yellow">Save</Button>
            </VStack>
        </form>

    </Container>
  )
}

export default Resetpassword