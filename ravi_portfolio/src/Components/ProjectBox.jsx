import { Box,Flex,Heading,Button,Image,Link } from '@chakra-ui/react'
import React from 'react'
import '../App.css'
import {FaNodeJs,FaHandPointRight} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'

const Projects = ({Name,TechStack,line1,line2,line3,codeUrl}) => {
  return (
    <Box className='Project_box'>
          <Box width={300} height={200} border='2px solid black' margin='25px'></Box>
      <Flex gap='auto' textAlign='center' className='Flex_box'>
        <Box width={['xs', 'md', 'lg', '4xl']}>
          <Heading as='h3'>Tech Stack</Heading>
          <Flex margin='20px'>
            <Box className='techStackBox'><AiFillHtml5/></Box>
            <Box className='techStackBox'><IoLogoCss3/></Box>
            <Box className='techStackBox'><FaNodeJs/></Box>
            <Box className='techStackBox'><FaNodeJs/></Box>
          </Flex>
        </Box>
        <Box className='project_desc_box'>
        <Box >
          <Heading marginBottom='-0px' as='h1'>{Name}</Heading>
          <Box className='descBox'>
            <p><FaHandPointRight/>{line1}</p>
            <p><FaHandPointRight/>{line2}</p>
            <p><FaHandPointRight/>{line3}</p>
          </Box>
          <Box>
            <Button style={{margin:'15px',borderRadius:'6px',fontSize:'16px', width:'130px'}} className='Resume_btn'><VscLinkExternal/> Live</Button>
            <a href={codeUrl} target='blank'> 
            <Button style={{margin:'15px',borderRadius:'6px',fontSize:'16px', width:'130px'}} className='Resume_btn'><BsGithub/> View Code</Button></a>
          </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}


export default Projects
