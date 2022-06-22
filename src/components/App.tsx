import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
// import { Container } from 'react-bootstrap';

import './App.css';

import { NavBar } from './NavBar';
import Home from '../pages/Home';
import Rules from '../pages/Rules';
import YouPick from '../pages/YouPick';
import About from '../pages/About';

function App(): JSX.Element {
  const [person1, setPerson1] = useState({
    name: ''
  });
  const [person2, setPerson2] = useState({
    name: ''

  });


  useEffect(() => {

  }, []);

  useEffect(() => {

  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setCount(count + 1), 1000);
  //   return () => clearTimeout(timer);
  // }, [count, setCount]);

  return (

    // <Container>
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/YouPick" element={<YouPick/>}/>
    <Route path="/Rules" element={<Rules/>}/>
    <Route path="/About" element={<About/>}/>
    </Routes>
    </>
    // </Container>

    // <nav> <a href="#one">one</a>
    // <a href="#two">two</a>
    // <a href="#three">three</a>
    // <a href="#four">four</a>

    // </nav>
    // <section id="one">
    // {/*  */}
    // </section>

    // <section id="two">
    // <Mood mood="good"/>
    // </section>

    // <section id="three">
    // <Choice_Grid/>
    // </section>

    // <section id="four">
    // <Final_Choice/>
    // </section>


    // <Details_Modal/>
    // </>

    )
  }

  export default App;
