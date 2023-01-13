import React from 'react'
import { Box,Heading,Text } from '@chakra-ui/react'
import "../Utils/Help.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import GitHubCalendar from 'react-github-calendar';
AOS.init();

const Calender = () => {

  return (
    <div className='calender-dark'  >
      <Box paddingBottom="0px" pt='20px'>
      <Heading className='statHeading' as='h1' borderBottom='4px solid #a1a1a1'>Calendar & Stats</Heading>
      <Text className='statHeading' pb="25px" >Check out my Github Calendar & Streak Stats</Text>
      </Box>
      <Box style={{textAlign:'center'}} className='calanderBox' data-aos="fade-up">
      <GitHubCalendar username="ravi80595" />
      </Box>
      <Box className="statBox-dark" data-aos="fade-up">
        <Box className='statbox1-dark'>
        <img src="https://streak-stats.demolab.com/?user=Ravi80595&theme=highcontrast&hide_border=true&border_radius=10" width='100%' alt="" />
        </Box>
        <Box className='statbox1-dark' data-aos="fade-up">
        <img src="https://github-readme-stats.vercel.app/api?username=Ravi80595&theme=highcontrast&show_icons=true&hide_border=true&border_radius=10" width='100%'/>
        </Box>
        </Box>
    </div>
  )
}

export default Calender
