import React, { useContext } from 'react'
import "../App.css"
import htmllogo from "../Images/htmllogo.png"
import javascriptlogo from "../Images/javascriptlogo.png"
import csslogo from "../Images/csslogo.png"
import githublogo from "../Images/githublogo.png"
import mongodblogo from "../Images/mongodblogo.png"
import nodelogo from "../Images/nodelogo.png"
import reactlogo from "../Images/reactlogo.png"
import reduxlogo from "../Images/reduxlogo.png"
import npmlogo from "../Images/npmlogo.png"
import { Box,Heading,Text } from '@chakra-ui/react'
import chakralogo from "../Images/chakralogo.png"
import { AppContext } from '../Context/ThemeContext'


const Skills = () => {
    const {darkTheme}=useContext(AppContext)


  return (
    <Box className={darkTheme?"skillBox":'skillBox-dark'}>
        <Box className={darkTheme?"skillBoxName":"skillBoxName-dark"}>
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="7%" marginLeft='15%' borderBottom='4px solid black'>Skills</Heading>
      <Text  style={{fontWeight:"bold",marginLeft:'15%'}}>These are the technologies I've worked with</Text>
      </Box>
    <div className={darkTheme?'skills_box':"skills_box-dark"}>
        <div className='npmhover'> 
            <img src={htmllogo} alt="HTML" height='50%'/>
            <Heading marginTop="10px">HTML</Heading>
        </div>
        <div className='csshover'> 
            <img src={csslogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>CSS</Heading>
        </div>
        <div className='javascripthover'> 
            <img src={javascriptlogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>JavaScript</Heading>
        </div>
        <div className='reacthover'> 
            <img src={reactlogo} alt="HTML" height='50%'/>
            <Heading mt='10px'v>React</Heading>
        </div>
        <div className='nodehover'> 
            <img src={nodelogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>NodeJS</Heading>
        </div>
        <div className='githubhover'> 
            <img src={githublogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>GitHub</Heading>
        </div>
        <div className='reacthover'> 
            <img src={chakralogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>ChakraUI</Heading>
        </div>
        <div className='nodehover'> 
            <img src={mongodblogo} alt="HTML" height='50%'/>
            <Heading mt='10px'>MongoDB</Heading>
        </div>
        <div className='reduxhover'> 
            <img src={reduxlogo} alt="HTML" height='60%'/>
            <Heading mt='10px'>Redux</Heading>
        </div>
        <div className='npmhover'> 
            <img src={npmlogo} alt="HTML" height='60%' />
            <Heading mt='10px'>NPM</Heading>
        </div>
     
    </div>
    </Box>
  )
}

export default Skills
