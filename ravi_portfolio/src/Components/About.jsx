import React from 'react'
import '../App.css' 
import {Box,Heading,Text} from '@chakra-ui/react'


const About = () => {

  return (
    <Box className="About_style-dark" > 
        <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="13%" marginLeft='10%' borderBottom='4px solid #a1a1a1' mt='0px'>About Me</Heading>
        <Box className='About_box' data-aos="fade-up">
        <Box>
        <Text>
        Hello! My name is Ravi Sharma & I enjoy creating things that live on the internet. I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.
        </Text>
        <Text>
        My field of interest is building new Web Technologies and also in areas related to Deep Learning and Natural Language Processing.
        </Text>
        <Text>
        I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion. I have work experience in multiple projects and clone projects with team collaboration.
        </Text>
        </Box>
        </Box>
      
    </Box>
  )
}

export default About
