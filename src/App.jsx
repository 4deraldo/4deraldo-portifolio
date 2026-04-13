import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skill.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </>
  );
}

export default App;
