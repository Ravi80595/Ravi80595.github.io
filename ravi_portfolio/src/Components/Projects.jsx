import { Box,Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectBox from '../Components/ProjectBox'


const Projects = () => {
  return (
    <Box style={{backgroundImage:'linear-gradient(to right ,#edfefe,white,#edfefe,white)',marginTop:'-20px'}}>
      <Heading textAlign='center'>Project Contrbution</Heading>
      <ProjectBox 
      Name={"BlueMercury"}
      TechStack={'tech stack here'}
      line1={' Bluemercury is an E-commerce website.Here users can buy cosmetics items.'}
      line2={' Users can add to cart,buy and review products.'}
      line3={' Third Line'}
      
      />
      <ProjectBox 
      Name={"     Text-Handler"}
      TechStack={'tech stack here'}
      line1={' TextHanlder is a text analyzing '}
      line2={' In this website user can analyze text very easily with features like real time charcters and word count.'}
      line3={' In this users can also perform action on text like uppercase, lowercase and extra space remover and so many.'}
      
      />
      <ProjectBox 
      Name={"Overstock"}
      TechStack={'tech stack here'}
      line1={' Overstock is an E-commerce website.'}
      line2={' Here user can buy furniture items.User can add item to the cart,buy and review products.'}
      line3={' Website made with react based on one page structure.'}
      
      />
    </Box>
  )
}

export default Projects
