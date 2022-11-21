import React from 'react'
import '../App.css';
import {Box,Heading,Image,Flex,Text,HStack} from "@chakra-ui/react"
import {FaNodeJs,FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import { useContext } from 'react';
import { AppContext } from '../Context/ThemeContext';
import {AiFillHtml5} from "react-icons/ai"


const ProfileContainer = () => {
  const {darkTheme}=useContext(AppContext)

  return (
    <div className={darkTheme?'HeaderArea':"HeaderArea-dark"}>
        <Flex flexDirection='column' width='60%' align='center' padding={20}>
        <Box> 
         <Text className='Hello_Style'>Hello I'm</Text> 
        <Heading as='h1' size={[10,100,200,400]} fontSize="60px" margin={-5}>Ravi Sharma</Heading>
        <Heading as='h3' size={['sm', 'md', 'lg', 'xl']} >Full Stack Web Developer</Heading>
        </Box>
        {/* <Box> 
        <HStack padding={10}><AiOutlineMail/><Text>rv.sharma@gmail.com</Text></HStack>
        <HStack padding={10}><AiOutlineMobile/><Text>+91 9306454204</Text></HStack>
        <HStack padding={10}><GrLocation/><Text>Hisar, Haryana</Text></HStack>
        </Box> */}
        <HStack fontSize='60px' className='icons'>
          <Text> <FaNodeJs/></Text>
          <Text> <FaReact/></Text>
          <Text> <AiFillHtml5/></Text>
          <Text> <TbBrandJavascript/></Text>
          <Text> <FaReact/></Text>
        </HStack>
        </Flex>
      
        <Box marginLeft='-8%'>
          <Image src='https://avatars.githubusercontent.com/u/63177572?v=4' alt='Ravi Sharma' className='photo_image' size={['sm', 'md', 'lg', '4xl']}/>
        </Box>
        
      </div>
      
  )
}

export default ProfileContainer
