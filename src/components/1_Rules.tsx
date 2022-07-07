import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  person1: string;
  person2: string;
  zipcode: number;
  radius: number;
  price: string;
  attributes: string;
};

interface RuleProps {
  onSubmitPage1: Function;
  resetForm: Boolean;
}

const Rules: React.FC<RuleProps> = ({
  onSubmitPage1,
  resetForm,
}: RuleProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (resetForm) {
      reset();
    }
  }, [resetForm]);

  function onSubmit(data: any, e: any) {
    e.preventDefault();
    onSubmitPage1(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Ground Rules</h1>
      <div className="main-container">
        <div className="left-container" style={{ flexDirection: 'row' }}>
          <div className="swing">
            3
            <br />
            Rounds <br />
            <br />
            2
            <br /> Indecisive People <br />
            <br />
            1
            <br /> Question - <b>Where to Eat?</b> <br /> <br />
          </div>
        </div>
        <div className="right-container">
          <b>Please fill out below: </b>
          <br />
          <h4>Person 1: </h4>
          <input
            className="inputField"
            {...register('person1')}
            type="text"
            name="person1"
            placeholder="First Name Please"
            id="person1"
            required
          />{' '}
          <br />
          <h4>Person 2: </h4>
          <input
            className="inputField"
            {...register('person2')}
            type="text"
            name="person2"
            placeholder="First Name Please"
            id="person2"
            required
          />
          <div>
            <br />
            <h4>Let's choose a Zip Code:</h4>
            <input
              className="inputField"
              {...register('zipcode', { maxLength: 5 })}
              type="number"
              name="zipcode"
              placeholder="5 digits please"
              minLength={5}
              id="zipcode"
              required
            />
            <br />
            <h4>How far do you wanna drive?: </h4>
            <input
              className="inputField"
              {...register('radius', { maxLength: 2 })}
              type="number"
              name="radius"
              placeholder="in Miles (you're in US right?)"
              minLength={1}
              id="radius"
              required
            />
          </div>
          <div>
            <br />
            <h4>Can we agree on the price? </h4>
            <div className="radio-buttons">
              <input
                className="inputField"
                {...register('price')}
                type="radio"
                name="price"
                value="$$$"
                required
              />
              $$$
              <input
                className="inputField"
                {...register('price')}
                type="radio"
                name="price"
                value="$$"
                required
              />
              $$
              <input
                className="inputField"
                {...register('price')}
                type="radio"
                name="price"
                value="$"
                required
              />
              $
            </div>
          </div>
          <br />
          <div className="new-input">
            <h4> Do we want to try something new?</h4>
            <input
              className="inputField"
              {...register('attributes')}
              type="checkbox"
              name="attributes"
              value="hot_and_new"
            />
          </div>
        </div>
      </div>
      <h4 style={{ padding: 20 }}>
        {watch('person1') || 'Person 1'} and {watch('person2') || 'Person 2'}{' '}
        have no idea what they want to eat, but they do know they want something{' '}
        {watch('radius')
          ? `less than ${watch('radius')} miles away.`
          : 'close by.'}{' '}
        They definitely want to eat{' '}
        {watch('price') === '$$$' ? 'and ball out.' : ''}
        {watch('price') === '$$' ? 'and find something modest.' : ''}{' '}
        {watch('price') === '$' ? 'and eat on a budget.' : ''}{' '}
        {watch('attributes') === 'hot_and_new'
          ? 'Oh and almost forgot, they want to try something new'
          : ''}
        ... <br />
        <br />
        Let's start by pressing the button below
      </h4>
      <button style={{ height: 60, minWidth: '20%' }} type="submit">
        Move On
      </button>
    </form>
  );
};

export default Rules;
