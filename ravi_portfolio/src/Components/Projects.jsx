import { Box,Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectBox from '../Components/ProjectBox'


const Projects = () => {
  return (
    <Box style={{backgroundImage:'linear-gradient(to right ,#edfefe,white,#edfefe,white)',marginTop:'-20px',paddingTop:'20px'}}>
      <Heading as='h1' textAlign='center'>PROJECTS</Heading>
      <ProjectBox 
      Name={"BlueMercury"}
      TechStack={'tech stack here'}
      line1={' Bluemercury is an E-commerce website.Here users can buy cosmetics items.'}
      line2={' Users can add to cart,buy and review products.'}
      line3={' Website is completely made with pure HTML CSS and Javascript. No laibraries of any languages is used.'}
      codeUrl={'https://github.com/KKShakya/spiffy-table-3415'}
      />
      <ProjectBox 
      Name={"Text-Handler"}
      TechStack={'tech stack here'}
      line1={' TextHanlder is a text analyzing '}
      line2={' In this website user can analyze text very easily with features like real time charcters and word count.'}
      line3={' In this users can also perform action on text like uppercase, lowercase and extra space remover and so many.'}
      codeUrl={'https://github.com/Ravi80595/Text-Analyzer'}
      />
      <ProjectBox 
      Name={"Overstock"}
      TechStack={'tech stack here'}
      line1={' Overstock is an E-commerce website.'}
      line2={' Here user can buy furniture items.User can add item to the cart,buy and review products.'}
      line3={' Website made with react based on one page structure.'}
      codeUrl={'https://github.com/Ravi80595/energized-secretary-1272/tree/main/overstock'}
      />
    </Box>
  )
}

export default Projects
