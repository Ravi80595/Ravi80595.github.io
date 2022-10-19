import React from 'react'
import {Box,Flex,Heading,Image,Text,Button,Wrap, Container} from '@chakra-ui/react'
import {HiDownload} from 'react-icons/hi'

const btn_style={
  padding: '10px',
  borderRadius: '20px',
  marginTop: '15px',
  color: 'white',
  background: 'blue',
  border: '2px solid blue',
  fontSize:'15px'
}

const About = () => {
  return (
    <Box className='About_style'>
      <Flex gap={200}> 
        <Box>
          <Image src='https://watermark.lovepik.com/photo/20211209/large/lovepik-young-female-college-students-studying-online-picture_501716409.jpg' alt='Ravi Sharma' className='photo_image' />
        </Box>
        <Box width='40%' margin='auto'>
        <Heading textAlign='center'>About Me</Heading>
        <Text>
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
        <Button style={btn_style}>Resume <HiDownload style={{marginLeft:'10px'}} /></Button>
        </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
