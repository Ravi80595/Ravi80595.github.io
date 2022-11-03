import React from 'react'
import {Box,Flex,Container,Text,Spacer,Heading,Button} from '@chakra-ui/react'
import ThemeButton from '../Utils/ThemeButton'

const Navbar = () => {

  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const scrollToAbout = () => {
    window.scrollTo({
      top: 450,
      behavior: 'smooth',
    });
  };

  const scrollToProjects = () => {
    window.scrollTo({
      top: 840,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: 200000,
      behavior: 'smooth',
    });
  };

  return (
    <>
    <Box className='Navbar_box'>
      <Box display='flex'>
         <Flex gap={60}  margin='auto auto auto auto'>
          <Heading as='h3' className='Link_btns' onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className='Link_btns' onClick={scrollToAbout}>About</Heading>
          <Heading as='h3' className='Link_btns'>Skills</Heading>
          <Heading as='h3' className='Link_btns' onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className='Link_btns' onClick={scrollToContact}>Contact</Heading>
          </Flex>
          <ThemeButton/>
        </Box>
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
