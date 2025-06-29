import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}

export default App;
