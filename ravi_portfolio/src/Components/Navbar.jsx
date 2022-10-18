import React from 'react'
import {Box,Flex,Container,Text,Spacer,Heading} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
    <Box className='Navbar_box'>
        <Flex gap={60} width='50%' margin='auto'>
          <Heading as='h3'>Home</Heading>
          <Heading as='h3'>About</Heading>
          <Heading as='h3'>Skills</Heading>
          <Heading as='h3'>Resume</Heading>
          <Heading as='h3'>Contact</Heading>
        </Flex>
    </Box>
    
    </>





    
    // <div style={{borderBottom:"2px solid black"}}>
    // <div style={{display:"flex",gap:'500px',margin:'15px'}}>
    //   <div>Logo</div>
    //   <div style={{display:"flex",justifyContent:'space-evenly',width:'90%'}}>
    //     <div>Home</div>
    //     <div>About</div>
    //     <div>Skills</div>
    //     <div>Resume</div>
    //     <div>Contact</div>
    //   </div>
    // </div>
    // </div>
  )
}

export default Navbar
