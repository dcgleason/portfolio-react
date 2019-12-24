import React from 'react';
import Heading from "./components/heading"
import Skills from "./components/skills"
import Work from "./components/work"
import Contact from "./components/contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading/>
      <Skills/> 
        <Work/>
       <Contact/>
    </div>
  );
}

export default App;
