import './App.css';
import Navbar from './Components/Navbar';
import ProfileContainer from './Components/ProfileContainer';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Pages/Contact';
import SlidingRow from './Utils/SlidingRow';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ProfileContainer/>
     <About/>
     <SlidingRow/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
