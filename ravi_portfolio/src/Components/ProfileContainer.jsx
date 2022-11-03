import React from 'react'
import '../App.css';
import {Box,Heading,Image,Flex,Text,HStack} from "@chakra-ui/react"
import {FaNodeJs,FaReact} from 'react-icons/fa'
import {AiOutlineMail,AiOutlineMobile,AiFillHtml5} from "react-icons/ai"
import {TbBrandJavascript} from 'react-icons/tb'
import {GrLocation} from 'react-icons/gr'
const ProfileContainer = () => {

  return (
    <div className='HeaderArea'>
        <Flex flexDirection='column' width='60%' align='center' padding={20}>
        <Box> 
         <Text className='Hello_Style'>Hello I'm</Text> 
        <Heading as='h1' size={['lg', 'md', 'lg', '4xl']} margin={-5}>Ravi Sharma</Heading>
        <Heading as='h3' size={['sm', 'md', 'lg', 'xl']} >Full Stack Developer</Heading>
        </Box>
        <Box> 
        <HStack padding={10}><AiOutlineMail/><Text>rv.sharma@gmail.com</Text></HStack>
        <HStack padding={10}><AiOutlineMobile/><Text>+91 9306454204</Text></HStack>
        <HStack padding={10}><GrLocation/><Text>Hisar, Haryana</Text></HStack>
        </Box>
        <HStack fontSize={40}>
          <Text> <FaNodeJs/></Text>
          <Text> <FaReact/></Text>
          <Text> <AiFillHtml5/></Text>
          <Text> <TbBrandJavascript/></Text>
          <Text> <FaReact/></Text>
        </HStack>
        </Flex>
      
        <Box>
          <Image src='https://avatars.githubusercontent.com/u/63177572?v=4' alt='Ravi Sharma' className='photo_image' size={['sm', 'md', 'lg', '4xl']}/>
        </Box>
        
      </div>
      
  )
}

export default ProfileContainer
