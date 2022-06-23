import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './App.css';
import './Fireworks.css';
import Rules from './1_Rules';
import Mood from './2_Mood';
import Choice_Grid from './3_Choice_Grid';
import Final_Choice from './4_Final_Choice';
import Details_Modal from './Details_Modal';

function removeDuplicatesInArray(array: string[]) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
// Specific object/key to array
function objectToArray(obj: any, key?: string) {
  return Object.keys(obj).map((key) => obj[key]);
}

// Remove empty values from array
function removeEmpty(arr: any) {
  return arr.filter(Boolean);
}

// sort array by key value pair with sort Option
function sortByKey(array: any, key: string, sortOption: string) {
  return array.sort((a: any, b: any) => {
    if (sortOption === 'asc') {
      return a[key] - b[key];
    } else {
      return b[key] - a[key];
    }
  });
}

function App(this: any): JSX.Element {
  const [selectionTags, setTags] = useState<string[]>([]);
  const [players, setPlayers] = useState<string[]>([]);
  const [page3Choices, setPage3Choices] = useState<object[]>([]);
  const [choiceResults, setChoices] = useState<object[]>([]);

  const [search, setSearch] = useState({
    radius: 5,
    new: false,
    person1: '',
    person2: '',
    price: '',
    zipcode: '',
    lat: 0,
    lng: 0,
  });
  const [filter, setFilter] = useState('rating');

  const handleChange = (event: any) => {
    setFilter(event.target.value);
  };
  useEffect(() => {
    let old = [...choiceResults];
    let newChoices = [];
    if (filter === 'rating') {
      newChoices = sortByKey(old, filter, 'desc');
    } else {
      newChoices = sortByKey(old, filter, 'asc');
    }
    console.log(newChoices);
    setChoices(newChoices);
  }, [filter]);

  const handleClick = (id: any) => {
    // get object in array where id matches
    const item: any =
      choiceResults.find((business: any) => business.id === id) || {};
    console.log('page3Choices.length', page3Choices.length);
    setPage3Choices([...page3Choices, item]);
  };

  // const handleClickFinal = (id: any) => {
  //   alert('congrats! PRESS RESET ON THE RIGHT SIDE TO START OVER');
  // };

  function onSubmitPage1(data: any) {
    console.log('data', data);
    setPlayers([data.person1, data.person2]);
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
          limit: 20,        };
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

    // add later
    // const attribute = (new === true ? new : '')

    var params: any = {
      term: sendToYelp,
      latitude: lat,
      longitude: lng,
      radius: radius * 1609.34,
      limit: '50',
    };

    axios
      .get(`http://localhost:3001/restaurants`, { params: params })
      .then((APIresponse) => {
        const businessArr: object[] = [];
        APIresponse.data.businesses.forEach((business: any) => {
          businessArr.push(business);
        });

        setChoices(sortByKey(businessArr, filter, 'dsc'));
      })
      .catch((error) => {
        console.log('error', error);
      });
  }
  return (
    <>
      <nav>
        <div id="logoContainer"></div>
        <div>
          <a href="#Rules">Rules</a>
          <a href="#Mood">Mood</a>
          <a href="#Choice_Grid">Choices</a>
          <a href="#Final_Choice">Final Choice</a>
          <a
            href="#Rules"
            onClick={() => {
              setTags([]);
              setPage3Choices([]);
              setChoices([]);
              setFilter('rating');
            }}
          >
            Reset
          </a>
        </div>
      </nav>

      <section id="Rules">
        <Rules onSubmitPage1={onSubmitPage1} />
      </section>

      <section id="Mood">
        <Mood onSubmitPage2={onSubmitPage2} selectionTags={selectionTags} />
      </section>

      <section id="Choice_Grid">
        <Choice_Grid
          choiceResults={choiceResults}
          filter={filter}
          handleChange={handleChange}
          handleClick={handleClick}
        />
      </section>

      <section id="Final_Choice">
        <Final_Choice
          page3Choices={page3Choices}
        />
      </section>
      <section id="Fireworks">
        <div className="pyro">
          <div className="before"></div>
          <div className="didIt">YOU DID IT</div>

          <div className="after"></div>
        </div>
      </section>

      <Details_Modal />
    </>
  );
}

export default App;

// let dummyObj = {
//   alias: '',
//   categories: [],
//   coordinates: {
//     latitude: 0,
//     longitude: -1,
//   },
//   display_phone: '',
//   distance: 100,
//   id: '',
//   image_url: '',
//   is_closed: false,
//   location: {
//     address1: '',
//     address2: '',
//     address3: '',
//     city: '',
//     country: 'US',
//     display_address: ['', ''],
//     state: '',
//     zip_code: '',
//   },
//   name: '',
//   phone: '',
//   price: '',
//   rating: 3,
//   review_count: 100,
//   transactions: ['pickup', 'delivery'],
//   url: '',
// };
