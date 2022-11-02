import { Box,Flex,Heading,Button,Image } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import {FaNodeJs,FaHandPointRight} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'

const Projects = ({Name,TechStack,line1,line2,line3}) => {
  return (
    <Box className='Project_box'>
      <Flex gap='125px' textAlign='center'>
        <Box>
          <Image src='https://static.vecteezy.com/system/resources/previews/003/795/478/original/cartoon-man-working-free-vector.jpg' alt='Ravi Sharma' width={300}></Image>
          <Heading as='h3'>Tech Stack</Heading>
          <Flex margin='0px 0px 20px 40px'>
            <Box className='techStackBox'><AiFillHtml5/></Box>
            <Box className='techStackBox'><IoLogoCss3/></Box>
            <Box className='techStackBox'><FaNodeJs/></Box>
            <Box className='techStackBox'><FaNodeJs/></Box>
          </Flex>
        </Box>
        <Box className='project_desc_box'>
        <Box>
          <Heading as='h1'>{Name}</Heading>
          <Box textAlign='left' fontSize='20px'>
            <p><FaHandPointRight/>{line1}</p>
            <p><FaHandPointRight/>{line2}</p>
            <p><FaHandPointRight/>{line3}</p>
          </Box>
          <Box>
            <Button style={{margin:'15px',borderRadius:'6px',fontSize:'16px', width:'130px'}} className='Resume_btn'><VscLinkExternal/> Live</Button>
            <Button style={{margin:'15px',borderRadius:'6px',fontSize:'16px', width:'130px'}} className='Resume_btn'><BsGithub/> View Code</Button>
          </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}


export default Projects
