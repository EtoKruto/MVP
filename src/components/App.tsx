import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';

import './App.css';
import Rules from './1_Rules';
import Mood from './2_Mood';
import Choice_Grid from './3_Choice_Grid';
import Final_Choice from './4_Final_Choice';
import Details_Modal from './Details_Modal';




function App(this: any): JSX.Element {
  // const { register, handleSubmit, watch } = useForm<Inputs>();

  // function onSubmit(data: any, e: any) {
  //   e.preventDefault();

  //   alert(JSON.stringify(data));

  //   // axios.post('/rsvps', {}).then((responce) => {
  //   //   // this.setState({"attending": responce.data})
  //   // });
  //   // reset();
  // }

  const [person1, setPerson1] = useState({
    name: '',
  });
  const [person2, setPerson2] = useState({
    name: '',
  });

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => setCount(count + 1), 1000);
  //   return () => clearTimeout(timer);
  // }, [count, setCount]);

  return (
    <>
      <nav>
        <div id="logoContainer">LOGO</div>
        <div>
          <a href="#Rules">Rules</a>
          <a href="#Mood">Mood</a>
          <a href="#Choice_Grid">Choices</a>
          <a href="#Final_Choice">Final Choice</a>
          <a href="#Rules">Reset</a>
        </div>
      </nav>

      <section id="Rules">
        <Rules />
      </section>

      <section id="Mood">
        <Mood mood="good" />
      </section>

      <section id="Choice_Grid">
        <Choice_Grid />
      </section>

      <section id="Final_Choice">
        <Final_Choice />
      </section>

      <Details_Modal />
    </>
  );
  }

  export default App;
