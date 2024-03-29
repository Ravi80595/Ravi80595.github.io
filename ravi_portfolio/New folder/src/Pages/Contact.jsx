import React from 'react'
import {Box,Heading,Text,Input,Textarea,Button, Flex} from '@chakra-ui/react'
import "../App.css"
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillFacebook,AiFillMail} from 'react-icons/ai'
import {AiOutlineCopyright} from 'react-icons/ai'

const Contact = () => {
  // const {darkTheme}=useContext(AppContext)
  return (
    <Box className='contact' >
      <Flex className="box2-dark">
        <Box className='box2a'>
        <Input className='box2aInput' placeholder='name'></Input>
        <Input className='box2aInput' placeholder='Enter Email Address'></Input>
        <Textarea className='box2aInput' type="textarea"></Textarea>
        <Button className='Resume_btn' margin="auto">Let's talk</Button>
        </Box>
      <Box className='lastBox'>
        <Heading as="h1" size='4xl'>Get In Touch</Heading>
        <Text>I can ensure reliablity, low cost fares and most important, with safety and comfort in mind.</Text>
        <Box className='lastBox2'>
        <Flex justifyContent="space-evenly" gap='5px'>
        <a href="https://mail.google.com/mail/u/3/#inbox" target='blank'><AiFillMail color='white' className='footerLogo' /></a>
        <a href="https://instagram.com/ravi.kapro?igshid=YmMyMTA2M2Y=" target='blank' ><BsInstagram className='footerLogo'/></a>   
        <a href="https://twitter.com/Ravi11967071" target='blank'><BsTwitter className='footerLogo'/></a> 
        <a href="https://www.linkedin.com/in/ravi-sharma-399572219/" target='blank'><AiFillLinkedin className='footerLogo'/></a> 
        <a href="https://www.facebook.com/" target='blank'> <AiFillFacebook className='footerLogo'/></a> 
        <a href="https://api.whatsapp.com/send/?phone=9306454204&text&type=phone_number&app_absent=0" target='blank'> <AiOutlineWhatsApp className='footerLogo'/></a>
        </Flex>
        </Box>
      </Box>
      </Flex>
      <Text textAlign="center" color='white' m='0px' pb='5px'> Contact :- +91 9306454204</Text>
      <Text textAlign="center" color='white' m='0px' pb='5px'> Email :- ravi.kaushik.y@gmail.com</Text>
      <Text textAlign="center" color='white' m='0px' pb='5px'>Designed and build by Ravi Sharma,<AiOutlineCopyright/> 2022 All rights reserved </Text>
    </Box>
  )
}

export default Contact

//https://wa.me/9306454204