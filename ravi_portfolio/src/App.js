import './App.css';
import Navbar from './Components/Navbar';
import ProfileContainer from './Components/ProfileContainer';
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <ProfileContainer/>
     <About/>
     <Projects/>
    </div>
  );
}

export default App;
