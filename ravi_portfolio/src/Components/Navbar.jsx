import React from 'react'
import {Box,Flex,Heading} from '@chakra-ui/react'
import ThemeButton from '../Utils/ThemeButton'
import { useContext } from 'react'
import { AppContext } from '../Context/ThemeContext'
import { useState } from 'react'
import { useEffect } from 'react'


const Navbar = () => {
  const {darkTheme}=useContext(AppContext)
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
    // document.querySelector(".navbar_line").style.width="15%"
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth',
    })
}
  const scrollToAbout = () => {
    // document.querySelector(".navbar_line").style.width="30%"
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
      top: 2450,
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
    <Box className={darkTheme?'Navbar_box':"Navbar_box-dark"}>
      <Box display='flex'>
         <Flex gap={60}  margin='auto auto auto auto'>
          <Heading as='h3' className={darkTheme?'Link_btns':'Link_btns-dark'} onClick={scrollToHome}>Home</Heading>
          <Heading as='h3' className={darkTheme?'Link_btns':'Link_btns-dark'} onClick={scrollToAbout}>About</Heading>
          <Heading as='h3' className={darkTheme?'Link_btns':'Link_btns-dark'} onClick={scrollToProjects}>Projects</Heading>
          <Heading as='h3' className={darkTheme?'Link_btns':'Link_btns-dark'} onClick={scrollToSkills}>Skills</Heading>
          <Heading as='h3' className={darkTheme?'Link_btns':'Link_btns-dark'} onClick={scrollToContact}>Contact</Heading>
          </Flex>
          <ThemeButton/>
        </Box>
        <div className='navbar_line'>
          
        </div>
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
