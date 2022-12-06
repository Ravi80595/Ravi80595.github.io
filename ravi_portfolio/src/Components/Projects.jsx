import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import "../Utils/Projects.css"
import ProjectBox from '../Components/ProjectBox'
import Project1 from "../Images/Project1.png"
import Project2 from "../Images/Project2.png"
import Project3 from "../Images/Project3.png"
import Project4 from "../Images/Project4.png"


const Projects = () => {

  return (
    <Box className="Project_Box-dark">
      <Box paddingBottom="10px">
      <Heading ml={{base:"5%",md:"10%",lg:"50%"}} as='h1' width="12%" marginLeft='10%' borderBottom='4px solid #a1a1a1'>Portfolio</Heading>
      <Text style={{fontWeight:"bold",marginLeft:'10%'}}>Check out some of my work right here</Text>
      </Box>
      <Box className="Project_box_grid-dark">
       <ProjectBox 
      Images={Project1}
      Name={"BlueMercury"}
      TechStack={'tech stack here'}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      // line1={' Bluemercury is an E-commerce website.Here users can buy cosmetics items.'}
      // line2={' Users can add to cart,buy and review products.'}
      // line3={' Website is completely made with pure HTML CSS and Javascript. No laibraries of any languages is used.'}
      descLine={"Bluemercury is an E-commerce website.Here users can add to cart,buy and review products."}
      techstacks={"HTML,CSS,Javascript"}
      codeUrl={'https://github.com/KKShakya/spiffy-table-3415'}
      />
      <ProjectBox
      Name={"Text-Handler"}
      TechStack={'tech stack here'}
      Images={Project2}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      // line1={' TextHanlder is a text analyzing '}
      // line2={' In this website user can analyze text very easily with features like real time charcters and word count.'}
      // line3={' In this users can also perform action on text like uppercase, lowercase and extra space remover and so many.'}
      techstacks={"Bootstrap,CSS,ReactJS"}
      descLine={"In this website user can delete extra spaces, make upper case lower case and many more."}
      codeUrl={'https://github.com/Ravi80595/Text-Analyzer'}
      />
      <ProjectBox 
      Name={"Overstock"}
      TechStack={'tech stack here'}
      Images={Project3}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      // line1={' Overstock is an E-commerce website.'}
      // line2={' Here user can buy furniture items.User can add item to the cart,buy and review products.'}
      // line3={' Website made with react based on one page structure.'}
      techstacks={"CSS,ReactJS,ChakraUI"}
      descLine={"Overstock is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/energized-secretary-1272/tree/main/overstock'}
      />
      <ProjectBox 
      Name={"Clofetch"}
      TechStack={'tech stack here'}
      Images={Project4}
      liveUrl={"https://overstock-ravi80595.vercel.app/"}
      // line1={' Clofetch is an E-commerce website.'}
      // line2={' Here user can buy Cloths and sneakers items.User can add item to the cart,buy and review products.'}
      // line3={' Website made with react based on one page structure.'}
      techstacks={"Redux,ReactJS,ChakraUI"}
      descLine={"Clofetch is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/energized-secretary-1272/tree/main/overstock'}
      /> 
      </Box>
    </Box>
  )
}

export default Projects
