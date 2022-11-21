import './App.css';
import Navbar from './Components/Navbar';
import ProfileContainer from './Components/ProfileContainer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Pages/Contact';
import SlidingRow from './Utils/SlidingRow';
import Calender from './Pages/Calender';
import Skills from './Pages/Skills';
import SideBox from './Components/SideBox';
import WebFont from 'webfontloader';
import { useEffect,useState } from 'react';
import { AppContext } from './Context/ThemeContext';
// import Profile from './Components/Profile';

function App() {
  const [darkTheme,setDarkTheme]=useState(false);

  const toogleTheme=()=>{
    console.log("clicked")
    if(darkTheme===false){
      setDarkTheme(true)
    }else{
      setDarkTheme(false)
    }
  }

// if(darkTheme===true){
//   document.querySelector(".App").style.background="grey"
// }


  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Chilanka']
      }
    });
   }, []);

  return (
    <div className={darkTheme?"App":"App-dark"} >
      <AppContext.Provider value={{darkTheme,toogleTheme}}>
     <Navbar/>
     <SideBox/>
     {/* <Profile/> */}
     <ProfileContainer/>
     <About/>
     <SlidingRow/>
     <Projects/>
     <Skills/>
     <Calender/>
     <Contact/>
     </AppContext.Provider>
    </div>
  );
}

export default App;
