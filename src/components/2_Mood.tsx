import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Marquee from 'react-marquee-master';
import tags from '../data/data.js';

type Inputs = {
  tags_1: string;
  tags_2: string;
  tags_3: string;
  tags_4: string;
  tags_5: string;
};
interface MoodProps {
  onSubmitPage2: Function;
  selectionTags: string[];
  players: string[];
}

const Mood: React.FC<MoodProps> = ({
  onSubmitPage2,
  selectionTags,
  players,
}: MoodProps) => {
  let placeholderTagText = 'Choose a tag from the right or add your own';
  let placeholderTagStyle = { minHeight: '5vh', margin: 20, minWidth: '40vh' };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: any, e: any) {
    e.preventDefault();
    onSubmitPage2(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="section">
        <h2 style={{ padding: 20 }}>
          <span style={{ fontSize: '5vh' }}> {players[0] || 'Person 1'} </span>{' '}
          what are you in the Mood for?{' '}
        </h2>
        <div className="main-container">
          <div className="left-container">
            Input Tags here, up to 5 :
            <input
              className="inputField"
              {...register('tags_1')}
              type="text"
              name="tags_1"
              placeholder={placeholderTagText}
              id="tags_1"
              style={placeholderTagStyle}
            />
            <input
              className="inputField"
              {...register('tags_2')}
              type="text"
              name="tags_2"
              placeholder={placeholderTagText}
              id="tags_2"
              style={placeholderTagStyle}
            />
            <input
              className="inputField"
              {...register('tags_3')}
              type="text"
              name="tags_3"
              placeholder={placeholderTagText}
              id="tags_3"
              style={placeholderTagStyle}
            />
            <input
              className="inputField"
              {...register('tags_4')}
              type="text"
              name="tags_4"
              placeholder={placeholderTagText}
              id="tags_4"
              style={placeholderTagStyle}
            />
            <input
              className="inputField"
              {...register('tags_5')}
              type="text"
              name="tags_5"
              placeholder={placeholderTagText}
              id="tags_5"
              style={placeholderTagStyle}
            />
          </div>
          <div className="right-container" style={{ minWidth: 400 }}>
            <h3>Selection of Tags Available</h3>
            <table style={{ width: '100%' }}>
              <tbody>
                <tr>
                  {' '}
                  <td>
                    <div className="marquee-container-outline">
                      {selectionTags.length ? (
                        <Marquee
                          marqueeItems={selectionTags}
                          direction={'up'}
                          minHeight={400}
                          delay={30}
                          key={selectionTags[0]}
                        />
                      ) : (
                        <Marquee
                          marqueeItems={tags}
                          direction={'up'}
                          minHeight={400}
                          delay={30}
                          key={selectionTags[0]}
                        />
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="marquee-container-outline">
                      {selectionTags.length ? (
                        <Marquee
                          marqueeItems={selectionTags}
                          direction={'up'}
                          minHeight={800}
                          delay={20}
                          key={selectionTags[0]}
                        />
                      ) : (
                        <Marquee
                          marqueeItems={tags}
                          direction={'up'}
                          minHeight={400}
                          delay={20}
                          key={selectionTags[0]}
                        />
                      )}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div>
              <h2 style={{ padding: 20 }}>Tags Chosen: </h2>
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
            </div>
          </div>
        </div>
        Press{' '}
        <button
          style={{ height: 80, minWidth: '10%', borderRadius: 20 }}
          type="submit"
        >
          Submit{' '}
        </button>{' '}
        after you've entered Tags
      </div>
    </form>
  );
};

export default Mood;
