import React, { useState, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
// import Marquee from "react-fast-marquee";
import Marquee from 'react-marquee-master';
import tags from '../data/data.js';
type Inputs = {
  tags_1: string,
  tags_2: string,
  tags_3: string,
  tags_4: string,
  tags_5: string,
};

export default function Mood () {

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors }
  } = useForm<Inputs>();


  function onSubmit (data: any, e: any) {
    e.preventDefault();

    alert(JSON.stringify(data));

    // axios.post('/rsvps', {}).then((responce) => {
    //   // this.setState({"attending": responce.data})
    // });
    // reset();
  }



  return (
    <div className="section">
      <h1> “What are you in the Mood for? </h1>
      <div
        className="main-container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="left-container">
          Input Tags here, up to 5 :
          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              {...register('tags_1')}
              type="text"
              name="tags_1"
              placeholder="Choose from the right or add your own"
              id="tags_1"
              style={{ minHeight: '5vh', margin: 20, minWidth: '40vh' }}
            />
            <input
              {...register('tags_2')}
              type="text"
              name="tags_2"
              placeholder="Choose from the right or add your own"
              id="tags_2"
              style={{ minHeight: '5vh', margin: 20, minWidth: '40vh' }}
            />
            <input
              {...register('tags_3')}
              type="text"
              name="tags_3"
              placeholder="Choose from the right or add your own"
              id="tags_3"
              style={{ minHeight: '5vh', margin: 20, minWidth: '40vh' }}
            />
            <input
              {...register('tags_4')}
              type="text"
              name="tags_4"
              placeholder="Choose from the right or add your own"
              id="tags_4"
              style={{ minHeight: '5vh', margin: 20, minWidth: '40vh' }}
            />
            <input
              {...register('tags_5')}
              type="text"
              name="tags_5"
              placeholder="Choose from the right or add your own"
              id="tags_5"
              style={{ minHeight: '5vh', margin: 20, minWidth: '40vh' }}
            />

            <button style={{ height: 40, minWidth: '20%' }} type="submit">
              Add Them below
            </button>
          </form>
        </div>
        <div className="right-container" style={{ minWidth: 400 }}>
          <h3>Selection of Tags Available</h3>
          <div className="marquee-container-outline">
          <Marquee marqueeItems={tags} direction={"up"} height={400} delay={30}/>
          </div>
        </div>
      </div>
      <h4>
        <p>Tags Chosen: </p>
        <p>
          {watch('tags_1')}
          {watch('tags_1') ? ', ' : ' '}
          {watch('tags_2')}
          {watch('tags_2') ? ', ' : ' '}
          {watch('tags_3')}
          {watch('tags_3') ? ', ' : ' '}
          {watch('tags_4')}
          {watch('tags_4') ? ', ' : ' '}
          {watch('tags_5')}
        </p>
        When Done, Press Submit to go the next step(this initiates the API
        search)
      </h4>
      <button type="submit">Continue</button>
    </div>
  );
    }




