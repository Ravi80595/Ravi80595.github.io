import React from 'react'
import {Box,Heading,Image,Text,Input,Textarea,Button, Flex} from '@chakra-ui/react'
import "../App.css"
import {GoLocation} from 'react-icons/go'
import {IoCallOutline} from 'react-icons/io5'
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineCopyright} from 'react-icons/ai'
import { useContext } from 'react'
import { AppContext } from '../Context/ThemeContext'
import AOS from "aos"
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
  const {darkTheme}=useContext(AppContext)
  return (
    <Box className='contact' mt='20px' data-aos="fade-up">
      {/* <Box className='boxa'>
        <div className={darkTheme?"box":"box-dark"}>
          <GoLocation style={{fontSize:'50px',marginTop:"10px"}}/>
          <h2 style={{margin:'0px'}}>HOME</h2>
          <h4>VPO Kapro, <br /> Hisar, Haryana</h4>
          
        </div>
        <div className={darkTheme?"box":"box-dark"}>
            <IoCallOutline style={{fontSize:'50px',marginTop:"10px"}}/>
           <h3 style={{margin:'0px'}}>PHONE NUMBER</h3>
           <h4>+91 9306454204</h4>
           <h4>+91 9896426411</h4>

        </div>
        <div className={darkTheme?"box":"box-dark"}></div>
        <div className={darkTheme?"box":"box-dark"}>
          <AiOutlineMail style={{fontSize:'50px',marginTop:"10px"}}/>
          <h4 style={{margin:'0px'}}>EMAIL</h4>
          <h4>ravi.kaushik.y@gmail.com</h4>
        </div>
      </Box> */}
      <Flex className={darkTheme?'box2':"box2-dark"}>
        <Box className='box2a'>
        <Input className='box2aInput' placeholder='name'></Input>
        <Input className='box2aInput' placeholder='Enter Email Address'></Input>
        <Textarea className='box2aInput' type="textarea"></Textarea>
        <Button className='Resume_btn' margin="auto">Let's talk</Button>
        </Box>
      <Box className='lastBox'>
        <Heading as="h1" size='4xl'>Get In Touch</Heading>
        <Text>I can ensure reliablity, low cost fares and most important, with safety and comfort in mind.</Text>
        <Flex justifyContent="space-evenly" fontSize="45px" marginTop="110px">
        <a href="https://instagram.com/ravi.kapro?igshid=YmMyMTA2M2Y=" target='blank'><BsInstagram/></a>   
        <a href="https://twitter.com/Ravi11967071" target='blank'><BsTwitter/></a> 
        <a href="https://www.linkedin.com/in/ravi-sharma-399572219/" target='blank'><AiFillLinkedin/></a> 
        <a href="https://instagram.com/ravi.kapro?igshid=YmMyMTA2M2Y=" target='blank'> <AiFillFacebook/></a> 
        
       
        </Flex>
      </Box>
      </Flex>
      <Text textAlign="center" color='white' marginTop='-20px'>Designed and build Ravi Sharma,<AiOutlineCopyright/> 2022 All rights reserved </Text>
    </Box>
  )
}

export default Contact
