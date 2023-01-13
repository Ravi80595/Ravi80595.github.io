import { Box,Flex,Heading,Button,Text } from '@chakra-ui/react'
// import '../App.css'
import "../Utils/Projects.css"
import {BsGithub} from 'react-icons/bs'
import {VscLinkExternal} from 'react-icons/vsc'
import AOS from "aos"
import 'aos/dist/aos.css';
AOS.init();

const Projects = ({Name,codeUrl,Images,liveUrl,descLine,techstacks}) => {


  return (
    <Box className="Project_Box3-dark" data-aos="fade-up">
          <Box className='project_image-dark'>
            <img src={Images} alt="s" width="100%" height="150px" className="Project_image-dark" />
          </Box>
      <Box gap='auto' textAlign='center' className="Flex_box-dark">
        <Box className="project_desc_box-dark">
        <Box >
          <Heading marginBottom='0px' as='h2'>{Name}</Heading>
          <Box textAlign='left' className="descBox2-dark">
            <p>{descLine}</p>
          </Box>
          <Box className="Techstack2-dark">
            <Text> <span color='blue'>Tech Stack: </span> {techstacks}</Text>
          </Box>
          <Flex justifyContent='space-evenly' textDecoration='none'>
            <a href={liveUrl} target='blank'>
            <Button className="liveButton-dark"><VscLinkExternal/> Live</Button>
            </a>
            <a href={codeUrl} target='blank'> 
            <Button className="liveButton-dark"><BsGithub/> View Code</Button></a>
          </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}


export default Projects
