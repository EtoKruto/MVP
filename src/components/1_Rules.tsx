import React from 'react';
import { useForm } from 'react-hook-form';

type Inputs = {
  person1: string;
  person2: string;
  zipcode: number;
  radius: number;
  price: string;
  new: string;
};

interface RuleProps {
  onSubmitPage1: Function;
}

const Rules: React.FC<RuleProps> = ({ onSubmitPage1 }: RuleProps) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: any, e: any) {
    e.preventDefault();
    onSubmitPage1(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Ground Rules</h1>
      <div className="main-container">
        <div className="left-container" style={{ flexDirection: 'row' }}>
          3
          <br />
          Rounds <br />
          <br />
          2
          <br /> Indecisive People <br />
          <br />
          1
          <br /> Choice - Where to Eat <br /> <br />
        </div>
        <div className="right-container">
          <b>Please fill out this page: </b>

          <h4>Person 1: </h4>
          <input
            className="inputField"
            {...register('person1')}
            type="text"
            name="person1"
            placeholder="First Name Please"
            id="person1"
            required
          />
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
            Let's choose a Zip Code:
            <br />
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
            How far do you wanna drive?:
            <br />
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
            <div>
              Can we agree on the price?
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
                $$
              </div>
            </div>
          </div>
          <br />
          <div className="new-input">
            Do we want to try something new?
            <input
              className="inputField"
              {...register('new')}
              type="checkbox"
              name="new"
              value="true"
            />
          </div>
        </div>
      </div>
      <h4 style={{ padding: 20 }}>
        {watch('person1') || 'Person 1'} and {watch('person2') || 'Person 2'}{' '}
        have no idea what they want to eat, but they do know they want something
        at most {watch('radius') || 'something close by.'}{' '}
        {watch('radius') ? 'miles away.' : ''} Let's start by pressing the
        button below
      </h4>
      <button style={{ height: 60, minWidth: '20%' }} type="submit">
        Move On
      </button>
    </form>
  );
};

export default Rules;
