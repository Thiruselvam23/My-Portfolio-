import React from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from "./components/Home";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Websitehoster from "./components/Websitehoster";

/*
Place that maintains all my components Using Route ... 
*/

function App() {
  return (
    <>
      <h1>Portfolio</h1>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>Home</Link> 
          <Link to={"/Education"}>Education</Link>
          <Link to={"/skills"}>Skills</Link>
          <Link to={"/Projects"}>Projects</Link>
          <Link to={"/Achievements"}>Achievements</Link>
          <Link to={"/Theremostate"}>Thermostat</Link>
          <Link to={"/CountDown Timer"}>CountDown Timer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Achievements" element={<Achievements/>} />
          <Route path="/Theremostate" element={<Websitehoster link={'https://thiruselvam23.github.io/WebTechLabThermoStat/'}/>} />
          <Route path="/Countdown Timer" element={<Websitehoster link={'https://thiruselvam23.github.io/CountdownTimer/'}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;