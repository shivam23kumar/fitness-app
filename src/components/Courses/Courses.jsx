import {
    Button,
    Container,
    Heading,
    HStack,
    Image,
    Input,
    Stack,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { Link } from 'react-router-dom';
  import { useDispatch, useSelector } from 'react-redux';
  //import { getAllCourses } from '../../redux/actions/course';
  import toast from 'react-hot-toast';
  
  //import { addToPlaylist } from '../../redux/actions/profile';
  //import { loadUser } from '../../redux/actions/user';
  
export const Course=({views,id,title,imageSrc,addToPlaylistHandler,creator,description,lectureCount})=>{
    return (
        <VStack className="course" alignItems={["center","flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"}/>
            <Heading textAlign={["center","left"]} maxW="200px" size={"sm"} fontFamily={"sans-serif"}
            noOfLines={3} children={title}
            />
            <Text noOfLines={2} children={description}/>
            <HStack>
            <Text 
            fontWeight={"bold"}
            textTransform="uppercase"
            children={"Creator"}/>
            <Text 
            fontFamily={"body"}
            textTransform="uppercase"
            children={"Creator"}/>
            </HStack>

            <Heading textAlign={"center"} size="xs" children={`Lectures- ${lectureCount}`}
            textTransform="uppercase"/>
            <Heading  size="xs" children={`Views- ${views}`}
            textTransform="uppercase"/>
            <Stack direction={["column","row"]} alignItems="center">
                <Link to={`/courses/${id}`}>
                    <Button colorScheme={"yellow"}>
                        Watch Now
                    </Button>
                </Link>
                <Button
                variant={"ghost"}
                colorScheme={"yellow"}
                onClick={()=>addToPlaylistHandler(id)}>
                    Add to playlist
                </Button>

            </Stack>

        </VStack>
    )
}

const Courses = () => {
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");

    const categories=[
        "Boxing",
        "Kick Boxing",
        "Self Defence",
        "Combat Jiu-Jitsu",
        "Animal Flow",
        "Out Door Training",
        "Muay Thai"
    ]
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
        <Heading children="All Courses" m={"8"} />
        <Input value={keyword} 
        onChange={e=>setKeyword(e.target.value)}
        placeholder="Search a course..."
        type={"text"}
        focusBorderColor="yellow.500"
        />
        <HStack 
        overflowX={"auto"} 
        paddingY="8" 
        css={{"&::-webkit-scrollbar":{
            display:"none"
        }}}>
            {categories.map((item,id)=>{
                return(
                    
                <Button key={id} onClick={()=>setCategory(item)} minW={"60"}>
                <Text children={item} />
                </Button>

                )
            }
            )}
            
        </HStack>
        <Stack
        direction={["column","row"]}
        flexWrap="wrap"
        justifyContent={["flex-start","space-evenly"]}
        alignItems={["center","flex-start"]}
        >
            <Course 
            title={"sample"}
            description={"Sample"}
            views={23}
            imageSrc={"sample"}
            id={1}
            creator={"sample"}
            lectureCount={2}
            />

        </Stack>

    </Container>
  )
}

export default Courses
