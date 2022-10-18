import './App.css';
import Navbar from './Components/Navbar';
import ProfileContainer from './Components/ProfileContainer';
import About from './Components/About';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <ProfileContainer/> */}
     <About/>
    </div>
  );
}

export default App;
