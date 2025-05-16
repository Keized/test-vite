import './App.css'
import About from './components/About';
import Banner from './components/Banner';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
