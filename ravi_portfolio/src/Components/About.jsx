import React from 'react'
import {Box,Flex,Heading,Container,Image,HStack,Text,Button} from '@chakra-ui/react'


const About = () => {
  return (
    <Box>
      <Flex gap={200}>
      <Box>
          <Image src='https://avatars.githubusercontent.com/u/63177572?v=4' alt='Ravi Sharma' className='photo_image' />
        </Box>
        <Box>
        <Heading>About Me</Heading>
        <Text>
            An enthusiastic Full Stack Developer. Capable of writing production-ready code using ReactJS, Redux, and
        CSS on the front-end, NodeJS, and Express on the backend to build single-page applications. Passionate
        about coding and strongly interested in working in a product-based company.
        </Text>
        <Button variant='outline'>HTML:5</Button>
        <Button variant='outline'>CSS</Button>
        <Button variant='outline'>JAVASCRIPT</Button>
        <Button variant='outline'>REACT</Button>
        <Button variant='outline'>NodeJS</Button>
        <Button variant='outline'>BOOTSTRAP</Button>
        <Button variant='outline'>REACT</Button>
        <Button>Download Resume</Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default About
