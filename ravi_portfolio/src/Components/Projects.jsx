import { Box,Heading,Text } from '@chakra-ui/react'
import React from 'react'
import "../Utils/Projects.css"
import ProjectBox from '../Components/ProjectBox'
import Project1 from "../Images/Project1.png"
import Project2 from "../Images/Project2.png"
import Project3 from "../Images/Project3.png"
import Project4 from "../Images/Project4.png"
import Project5 from "../Images/Project5.png"

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
      liveUrl={"https://bluemercury-iota.vercel.app/"}
      descLine={"Bluemercury is an E-commerce website.Here users can add to cart,buy and review products."}
      techstacks={"HTML,CSS,Javascript"}
      codeUrl={'https://github.com/KKShakya/spiffy-table-3415'}
      />


      <ProjectBox
      Name={"EverNote"}
      TechStack={'tech stack here'}
      Images={Project2}
      liveUrl={"https://frontend-ravi80595.vercel.app/"}
      techstacks={"ReactJS,MongoDB,Express,ChakraUI"}
      descLine={"This is Bascially a Notes Making and text analyzing website for daily uses."}
      codeUrl={'https://github.com/Ravi80595/EvernotesApp'}
      />

      <ProjectBox 
      Name={"Pharmbuddy"}
      TechStack={'tech stack here'}
      Images={Project3}
      liveUrl={"https://farmbuddy.vercel.app/"}
      techstacks={"ReactJS,ChakraUI,MongoDB,Express"}
      descLine={"Pharmbuddy is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/itsDipaks/Farm-Buddy.com'}
      />

      <ProjectBox 
      Name={"Clofetch"}
      TechStack={'tech stack here'}
      Images={Project4}
      liveUrl={"https://farfetch-8hthowlmt-masum-raja.vercel.app/"}
      techstacks={"Redux,ReactJS,ChakraUI"}
      descLine={"Clofetch is an E-commerce website.Here users can add to cart,buy and review products."}
      codeUrl={'https://github.com/Ravi80595/few-insect-4217'}
      /> 
      <ProjectBox 
      Name={"SocialPshcyo"}
      TechStack={'tech stack here'}
      Images={Project5}
      liveUrl={"https://socialpshycho.vercel.app/"}
      techstacks={"ReactJS,ChakraUI,Nodejs,MongoDB"}
      descLine={"SocialPshcyo is a social media website. Here your can upload posts see others also like and comment other posts."}
      codeUrl={'https://github.com/Ravi80595/socialPshycho'}
      /> 
      </Box>
    </Box>
  )
}

export default Projects
