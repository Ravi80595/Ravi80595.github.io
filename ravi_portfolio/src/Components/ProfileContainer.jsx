import React from 'react'
import '../App.css';
import {Box,Heading,Image,Flex,Text,HStack} from "@chakra-ui/react"
import {FaNodeJs,FaReact} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import { useContext } from 'react';
import { AppContext } from '../Context/ThemeContext';
import {AiFillHtml5} from "react-icons/ai"
import AOS from "aos"
import 'aos/dist/aos.css';
AOS.init();

const ProfileContainer = () => {
  const {darkTheme}=useContext(AppContext)

  return (
    <div className={darkTheme?'HeaderArea':"HeaderArea-dark" } >
        <Flex flexDirection='column' width='60%' align='center' padding={20}>
        <Box data-aos="fade-right"> 
         <Text className='Hello_Style'>Hello I'm</Text> 
        <Heading as='h1' size={[10,100,200,400]} fontSize="60px" margin={-5}>Ravi Sharma</Heading>
        <Heading as='h3' size={['sm', 'md', 'lg', 'xl']} >Full Stack Web Developer</Heading>
        </Box>
        <HStack fontSize='60px' className='icons' data-aos="fade-right">
          <Text> <FaNodeJs/></Text>
          <Text> <FaReact/></Text>
          <Text> <AiFillHtml5/></Text>
          <Text> <TbBrandJavascript/></Text>
          <Text> <FaReact/></Text>
        </HStack>
        </Flex>
      
        <Box marginLeft='-8%' data-aos="fade-left">
          <Image src='https://avatars.githubusercontent.com/u/63177572?v=4' alt='Ravi Sharma' className='photo_image' size={['sm', 'md', 'lg', '4xl']}/>
        </Box>
        
      </div>
      
  )
}

export default ProfileContainer
