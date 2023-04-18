import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    HStack,
    useDisclosure,
    VStack,
  } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { logout } from '../../../redux/actions/user';
  
const Header = () => {
    const {isOpen, onClose, onOpen } = useDisclosure()
    const isAuthenticated = false;
    const user={
        role:"admin"
    }
    const logoutHandler = ()=>{
        console.log("logout");
    }
  return (
    <>
        <ColorModeSwitcher />
        <Button 
        onClick={onOpen}
        colorScheme={'yellow'}
        width="12"
        height={'12'}
        rounded="full"
        zIndex={'overlay'}
        position={'fixed'}
        top="6"
        left="6"
        >
            <RiMenu5Fill />
        </Button>
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay backdropFilter={"blur(5px)"} />
            <DrawerContent>
                <DrawerHeader justifyContent={"center"} borderBottomWidth={"1px"}> 
                    MEP Fitness
                </DrawerHeader>
                <DrawerBody>
                    <VStack spacing={"4"} alignItems="flex-start">
                        <Link to="/">
                            <Button variant={"ghost"}>Home</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant={"ghost"}>About</Button>
                        </Link>
                        <Link to="/courses">
                            <Button variant={"ghost"}>Browse all courses</Button>
                        </Link>
                        <Link to="/request">
                            <Button variant={"ghost"}>Request a course</Button>
                        </Link>
                        <Link to="contact">
                            <Button variant={"ghost"}>Contact Us!</Button>
                        </Link>
                        <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width="80%">
                            {isAuthenticated ? (<>
                                <VStack>
                                    <HStack>
                                        <Link to="/profile">
                                            <Button variant={"ghost"} colorScheme={"yellow"}>
                                                Profile
                                            </Button>
                                        </Link>
                                        <Button variant={"ghost"} onClick={logoutHandler}>
                                            <RiLogoutBoxLine />
                                            Logout
                                        </Button>
                                    </HStack>
                                    {user && user.role==="admin" && 
                                    <Link to="/admin/dashboard">
                                        <Button color={"purple"} variant="ghost">
                                            <RiDashboardFill style={{margin:"4px"}}/>
                                            Dashboard
                                        </Button>
                                    </Link>}
                                </VStack>
                            </>): (<>
                            <Link to="/login">
                                <Button colorScheme={"yellow"}>Login</Button>
                            </Link>

                            <p>OR</p>
                            <Link to="/register">
                                <Button colorScheme={"yellow"}>Sign Up</Button>
                            </Link>

                            
                            </>)}

                        </HStack>
                    </VStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>

    </>
  )
}

export default Header
