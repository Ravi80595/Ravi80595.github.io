import React from 'react'
import { Box,Heading,Text,Flex } from '@chakra-ui/react'
import Calander from "../Images/Calander.png"
import "../Utils/Help.css"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import {FaRegClock} from "react-icons/fa"
import {HiArrowsUpDown} from "react-icons/hi2"
import {GoIssueOpened} from "react-icons/go"
import {AiFillStar} from "react-icons/ai"
import { useContext } from 'react'
import { AppContext } from '../Context/ThemeContext'
import Calander2 from "../Images/Calander2.png"
import AOS from "aos"
import 'aos/dist/aos.css';
AOS.init();

const Calender = () => {

  const {darkTheme}=useContext(AppContext)
  console.log(darkTheme)

  return (
    <div className={darkTheme?'calender':'calender-dark'} data-aos="fade-up">
      <Box paddingBottom="0px" mt="70px">
      <Heading className='statHeading' as='h1' borderBottom='4px solid black'>Calendar & Stats</Heading>
      {/* style={{fontWeight:"bold",marginLeft:'170px'}} */}
      <Text className='statHeading' >Check out my Github Calendar & Streak Stats</Text>
      </Box>
      <Box style={{textAlign:'center'}}>
      <img src={Calander} className={darkTheme?'calendarImage':"calendarImage-dark"}/>
      <img src={Calander2}  className={darkTheme?'calendarImages':"calendarImages-dark"}/>
      </Box>
      <Box className={darkTheme?'statBox':"statBox-dark"}>
        <Box className={darkTheme?'statbox1':'statbox1-dark'} >
        <img src="https://streak-stats.demolab.com/?user=Ravi80595&theme=highcontrast&hide_border=true&border_radius=10" width="100%" alt="" />
        </Box>
        <Box className={darkTheme?'statbox1a':'statbox1a-dark'} >
        <img src="https://streak-stats.demolab.com/?user=Ravi80595&hide_border=true&border_radius=10" alt="" />
        </Box>

       
        <Flex className={darkTheme?'statBox2':"statBox2-dark"}>
          <Box className='StatBox2Inside'>
            <Box className='statList'>
            <p style={{ marginBottom:"10px",marginTop:'0px',fontSize:"17px"}}><b>Ravi Sharma's GitHub Stats</b></p>
            <p style={{margin:"4px"}}><AiFillStar/>Total Stars Earned:</p>
            <p style={{margin:"4px"}}><FaRegClock/>Total Commits(2022):</p>
            <p style={{margin:"4px"}}><HiArrowsUpDown/>Total PR's:</p>
            <p style={{margin:"4px"}}><GoIssueOpened/>Total Issues:</p>
            <p style={{margin:"4px"}}><BsFillBookmarkStarFill/>Contributed to:</p>
            </Box>
            <Box className='statList2'>
              <p>5</p>
              <p>88</p>
              <p>42</p>
              <p>22</p>
              <p>2</p>
            </Box>
          </Box>
         
          <Box className='StatBox1Inside'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSF76jSjA4XEQfTM_jLTnrqeP8UpkZd6tfVA&usqp=CAU' width='110px' style={{marginTop:'10px'}} alt="" />
          </Box>
        </Flex>
      </Box>

    </div>
  )
}

export default Calender
