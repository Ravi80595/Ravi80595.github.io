import React from 'react'
import '../App.css' 
import {Box,Flex,Heading,Image,Text,Button,Wrap, Container} from '@chakra-ui/react'
import {HiDownload} from 'react-icons/hi'

const About = () => {
  return (
    <Box className='About_style'>
      <Flex gap='auto'> 
        <Box>
          <Image src='https://static.vecteezy.com/system/resources/previews/003/795/478/original/cartoon-man-working-free-vector.jpg' alt='Ravi Sharma' className='About_image' boxSize={['xs', 'md', 'lg', '4xl']}/>
        </Box>
        <Box width='50%' margin='auto' padding='20px' marginTop='0px'>
        <Heading as='h1' textAlign='center'>About Me</Heading>
        <Text padding='20px'>
            An enthusiastic Full Stack Developer. Capable of writing production-ready code using ReactJS, Redux, and CSS on the front-end, NodeJS, and Express on the backend to build single-page applications. Passionate about coding and strongly interested in working in a product-based company.
        </Text>
        <Wrap>
        <Button className='Skills_btn'>HTML:5</Button>
        <Button className='Skills_btn'>CSS</Button>
        <Button className='Skills_btn'>JAVASCRIPT</Button>
        <Button className='Skills_btn'>REACT</Button>
        <Button className='Skills_btn'>NodeJS</Button>
        <Button className='Skills_btn'>BOOTSTRAP</Button>
        <Button className='Skills_btn'>REACT</Button>
        </Wrap>
        <Box>
        <Button className='Resume_btn'>Resume <HiDownload style={{marginLeft:'10px'}} /></Button>
        </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
