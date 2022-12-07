// import styles from "./Nav.module.css"
import React from 'react'
// import '../App.css'
import "../Utils/Navbar.css"
import {Box,Flex,Heading,Button,Text} from '@chakra-ui/react'
import { useState } from 'react'
import { useEffect } from 'react'
import MobNav from './MobNav'


const Navbar = () => {
  const [scrollTop,setScrollTop]=useState(0)


const onScroll=()=>{
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
  const scrolled = (winScroll / height) *100;
  setScrollTop(scrolled)
}
useEffect(()=>{
  window.addEventListener("scroll",onScroll)
  return ()=>window.removeEventListener("scroll",onScroll)
})
let r=Math.round(scrollTop)

useEffect(()=>{
  document.querySelector(".navbar_line").style.width=`${r}%`
})
  

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
      top: 980,
      behavior: 'smooth',
    });
  };

  const scrollToSkills = () => {
    window.scrollTo({
      top: 2050,
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
    <Box className='Laptop-view'>
      <Box display='flex' >
        <p style={{fontSize:'40px',margin: '0px',marginLeft: '20px',fontFamily: 'cursive'}}>Ravi</p>
         <Flex gap={60}  margin='auto auto auto auto' >
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToAbout}>About</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToSkills}>Skills</Heading>
          <Heading as='h3' className='Link_btns-dark' onClick={scrollToContact}>Contact</Heading>
          <a href="https://drive.google.com/file/d/1VkGzotDBg9Qxjg6y4sVN58YcDNxE0zYV/view" target='blank'>
            <Heading as='h3' className='Link_btns-dark' color="white">Resume</Heading>
          </a>
          </Flex>
        </Box> 
        <div className='navbar_line'></div>
      </Box>
        <div className='mobileDiv'>
            <MobNav />
        </div>
    </>
  )
}

export default Navbar
