import React, { useState } from 'react';
import axios from 'axios';

function removeDuplicatesInArray(array: string[]) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import Rules from './1_Rules';
import Mood from './2_Mood';
import Choice_Grid from './3_Choice_Grid';
import Final_Choice from './4_Final_Choice';
import Details_Modal from './Details_Modal';

// Specific object/key to array
function objectToArray(obj: any, key?: string) {
  return Object.keys(obj).map((key) => obj[key]);
}

// Remove empty values from array
function removeEmpty(arr: any) {
  return arr.filter(Boolean);
}

function App(this: any): JSX.Element {
  const [selectionTags, setTags] = useState<string[]>([]);
  const [choiceResults, setChoices] = useState<object[]>([
    {
      alias: '',
      categories: [],
      coordinates: {
        latitude: 0,
        longitude: -1,
      },
      display_phone: '',
      distance: 100,
      id: '',
      image_url:
        '',
      is_closed: false,
      location: {
        address1: '',
        address2: '',
        address3: '',
        city: 'San Diego',
        country: 'US',
        display_address: ['', ''],
        state: '',
        zip_code: '',
      },
      name: '',
      phone: '',
      price: '',
      rating: 3,
      review_count: 100,
      transactions: ['pickup', 'delivery'],
      url: '',
    },
  ]);
  const [search, setSearch] = useState({
    radius: 5,
    new: false,
    person1: 'Alex',
    person2: 'also Alex',
    price: '$$$',
    zipcode: '92108',
    lat: 0,
    lng: 0,
  });

  function onSubmitPage1(data: any) {
    setSearch(data);
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${
          data.zipcode
        }&key=${import.meta.env.GOOGLE_API_KEY}`,
      )
      .then(function (response) {
        const { lat, lng } = response.data.results[0].geometry.location;

        setSearch({ ...search, lat: lat, lng: lng });

        console.log(search);

        var params: any = {
          term: '',
          latitude: lat,
          longitude: lng,
          radius: data.miles * 1609.34,
          limit: 20,
        };
        axios
          .get(`http://localhost:3001/restaurants`, { params: params })
          .then((APIresponse) => {
            const temptags: string[] = [];

            APIresponse.data.businesses.forEach((business: any) => {
              business.categories.forEach((category: any) => {
                temptags.push(category.title);
              });
            });
            setTags(removeDuplicatesInArray(temptags));
          })
          .catch((error) => {
            console.log('error', error);
          });
      });
  }

  function onSubmitPage2(data: any) {
    const sendToYelp = removeEmpty(objectToArray(data)).join(', ');
    const { lat, lng, radius } = search;

    var params: any = {
      term: sendToYelp,
      latitude: lat,
      longitude: lng,
      radius: radius * 1609.34,
      limit: '50',
    };

    console.log('params', params);
    axios
      .get(`http://localhost:3001/restaurants`, { params: params })
      .then((APIresponse) => {
        const businessArr: object[] = [];

        APIresponse.data.businesses.forEach((business: any) => {
          console.log('business', business);
          businessArr.push(business);
        });
        setChoices(businessArr);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

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
        <Rules onSubmitPage1={onSubmitPage1} />
      </section>

      <section id="Mood">
        <Mood onSubmitPage2={onSubmitPage2} selectionTags={selectionTags} />
      </section>

      <section id="Choice_Grid">
        <Choice_Grid choiceResults={choiceResults} />
      </section>

      <section id="Final_Choice">
        <Final_Choice />
      </section>

      <Details_Modal />
    </>
  );
}

export default App;
