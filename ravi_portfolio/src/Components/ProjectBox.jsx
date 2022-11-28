import { Box,Flex,Heading,Button,Image,Link, useConst,Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import '../App.css'
import "../Utils/Projects.css"
import {FaNodeJs,FaHandPointRight} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'
import { AppContext } from '../Context/ThemeContext'

const Projects = ({Name,line1,line2,line3,codeUrl,Images,liveUrl,descLine,techstacks}) => {
  const {darkTheme}=useContext(AppContext)


  return (
    <Box className={darkTheme?"Project_Box3":"Project_Box3-dark"}>
          <Box className={darkTheme?'project_image':'project_image-dark'} border='2px solid black'>
            <img src={Images} alt="s" width="100%" height="150px" className={darkTheme?"Project_image":"Project_image-dark"} />
          </Box>
      <Box gap='auto' textAlign='center' className={darkTheme?'Flex_box':"Flex_box-dark"}>
        <Box width={['xs', 'md', 'lg', '4xl']}>
          <h3 as='h3' className={darkTheme?"TechStackHeading":"TechStackHeading-dark"} >Tech Stack</h3>
          <Flex margin='20px' justifyContent='space-evenly'>
            <Box className={darkTheme?'techStackBox':"techStackBox-dark"}><AiFillHtml5/></Box>
            <Box className={darkTheme?'techStackBox':"techStackBox-dark"}><IoLogoCss3/></Box>
            <Box className={darkTheme?'techStackBox':"techStackBox-dark"}><FaNodeJs/></Box>
            <Box className={darkTheme?'techStackBox':"techStackBox-dark"}><FaNodeJs/></Box>
          </Flex>
        </Box>
        <Box className={darkTheme?'project_desc_box':"project_desc_box-dark"}>
        <Box >
          <Heading marginBottom='0px' as='h3'>{Name}</Heading>
          <Box className={darkTheme?'descBox':"descBox-dark"}>
            <p><FaHandPointRight/>{line1}</p>
            <p><FaHandPointRight/>{line2}</p>
            <p><FaHandPointRight/>{line3}</p>
          </Box>
          <Box textAlign='left' className={darkTheme?'descBox2':"descBox2-dark"}>
            <p>{descLine}</p>
          </Box>
          <Box className={darkTheme?"Techstack2":"Techstack2-dark"}>
            <Text> <span color='blue'>Tech Stack: </span> {techstacks}</Text>
          </Box>
          <Flex justifyContent='space-evenly'>
            <a href={liveUrl} target='blank'>
            <Button className={darkTheme?"liveButton":"liveButton-dark"}><VscLinkExternal/> Live</Button>
            </a>
            <a href={codeUrl} target='blank'> 
            <Button className={darkTheme?"liveButton":"liveButton-dark"}><BsGithub/> View Code</Button></a>
          </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default Projects
