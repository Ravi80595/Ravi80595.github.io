import './App.css';
import Navbar from "./Components/Navbar"
import ProfileContainer from './Components/ProfileContainer';
import SideBox from './Components/SideBox';
import About from './Components/About';
import SlidingRow from "./Utils/SlidingRow"
import Skills from "./Pages/Skills"
import Calender from "./Pages/Calender"
import Contact from "./Pages/Contact"
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SideBox/>
     <ProfileContainer/>
     <About/>
     <SlidingRow/>
     <Projects/>
     <Skills/>
     <Calender/>
     <Contact/>
    </div>
  );
}

export default App;
