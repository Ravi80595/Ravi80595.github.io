import { background, Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import "../Utils/Projects.css"
import { useContext } from 'react'
import ProjectBox from '../Components/ProjectBox'
import { AppContext } from '../Context/ThemeContext'
import Project1 from "../Images/Project1.png"
import Project2 from "../Images/Project2.png"
import Project3 from "../Images/Project3.png"


const Projects = () => {
  const {darkTheme}=useContext(AppContext)

  return (
    <Box className={darkTheme?'Project_Box':"Project_Box-dark"}>
      <Box paddingBottom="10px">
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="12%" marginLeft='15%' borderBottom='4px solid black'>Portfolio</Heading>
      <Text style={{fontWeight:"bold",marginLeft:'15%'}}>Check out some of my work right here</Text>
      </Box>
      <Box className={darkTheme?"Project_box_grid":"Project_box_grid-dark"}>
      <ProjectBox 
      Images={Project1}
      Name={"BlueMercury"}
      TechStack={'tech stack here'}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      line1={' Bluemercury is an E-commerce website.Here users can buy cosmetics items.'}
      line2={' Users can add to cart,buy and review products.'}
      line3={' Website is completely made with pure HTML CSS and Javascript. No laibraries of any languages is used.'}
      descLine={"Bluemercury is an E-commerce website.Here users can add to cart,buy and review products."}
      techstacks={"HTML,CSS,Javascript"}
      codeUrl={'https://github.com/KKShakya/spiffy-table-3415'}
      />
      <ProjectBox 
      Name={"Text-Handler"}
      TechStack={'tech stack here'}
      Images={Project2}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      line1={' TextHanlder is a text analyzing '}
      line2={' In this website user can analyze text very easily with features like real time charcters and word count.'}
      line3={' In this users can also perform action on text like uppercase, lowercase and extra space remover and so many.'}
      techstacks={"Bootstrap,CSS,ReactJS"}
      descLine={"Bluemercury is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/Text-Analyzer'}
      />
      <ProjectBox 
      Name={"Overstock"}
      TechStack={'tech stack here'}
      Images={Project3}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      line1={' Overstock is an E-commerce website.'}
      line2={' Here user can buy furniture items.User can add item to the cart,buy and review products.'}
      line3={' Website made with react based on one page structure.'}
      techstacks={"CSS,ReactJS,ChakraUI"}
      descLine={"Bluemercury is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/energized-secretary-1272/tree/main/overstock'}
      />
      </Box>
    </Box>
  )
}

export default Projects
