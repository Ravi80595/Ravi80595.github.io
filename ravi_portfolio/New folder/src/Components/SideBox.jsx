import React from 'react'
import { Box,Text,Flex } from '@chakra-ui/react'
import "../Utils/Help.css"
import {AiFillLinkedin,AiOutlineGithub,AiFillMail} from 'react-icons/ai'
import {BsFillPersonLinesFill} from "react-icons/bs"

const SideBox = () => {
  return (
    <Box className='sideBox' >
    <a href="https://www.linkedin.com/in/ravi-sharma-399572219/" target='blank'>
     <Flex className='sideBox1' borderTopRightRadius='15px'>
        <Text margin='0px' pt='7px' color='white'>Linkedin</Text>
        <Box className='sideBox2'>
        <AiFillLinkedin color='white'/>
        </Box>
    </Flex>
    </a>
    <a href="https://github.com/Ravi80595" target='blank'>
    <Flex className='sideBox1'>
        <Text pt='7px' margin='0px' color='white'>GitHub</Text>
        <Box className='sideBox2'>
        <AiOutlineGithub color='white'/>
        </Box>
    </Flex>
    </a>
    <a href="https://mail.google.com/mail/u/3/#inbox" target='blank'>
    <Flex className='sideBox1'>
        <Text pt='7px' margin='0px' color='white'>E - Mail</Text>
        <Box className='sideBox2'>
        <AiFillMail color='white' />
        </Box>
    </Flex>
    </a>
    <a href="https://drive.google.com/file/d/1VkGzotDBg9Qxjg6y4sVN58YcDNxE0zYV/view" target='blank'>
    <Flex className='sideBox1' borderBottomRightRadius='15px'>
        <Text pt='7px' margin='0px' color='white'>Resume</Text>
        <Box className='sideBox2'>
        <BsFillPersonLinesFill color='white'/>
        </Box>
    </Flex>
    </a>
    </Box>
  )
}

export default SideBox
