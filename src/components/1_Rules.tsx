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
    <div className="section">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Ground Rules</h1>
        <div
          className="main-container"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div className="left-container">
            <p>
              3 Rounds <br />
              2 Indecisive People <br />
              1 Choice - Where to Eat <br /> <br />
              <b style={{ color: 'rose' }}>Please fill out this page: </b>
            </p>
            <h3>Person 1: </h3>
            <input
              {...register('person1')}
              type="text"
              name="person1"
              placeholder="First Name Please"
              id="person1"
              required
            />
            <h3>Person 2: </h3>
            <input
              {...register('person2')}
              type="text"
              name="person2"
              placeholder="First Name Please"
              id="person2"
              required
            />
          </div>
          <div className="right-container">
            <h3>ZipCode</h3>
            <div>
              Let's choose a Zip Code:
              <br />
              <input
                {...register('zipcode', { maxLength: 5 })}
                type="number"
                name="zipcode"
                placeholder="5 digits please"
                minLength={5}
                id="zipcode"
                required
              />
              <br />
              <br />
              How far do you wanna drive?:
              <br />
              <input
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
                  <label>
                    <input
                      {...register('price')}
                      type="radio"
                      name="price"
                      value="$$$"
                      required
                    />
                    $$$
                  </label>
                  <label>
                    <input
                      {...register('price')}
                      type="radio"
                      name="price"
                      value="$$"
                      required
                    />
                    $$
                  </label>
                  <label>
                    <input
                      {...register('price')}
                      type="radio"
                      name="price"
                      value="$"
                      required
                    />
                    $$
                  </label>
                </div>
              </div>
            </div>
            <br />
            <div>
              Do we want to try something new?
              <label>
                <input
                  {...register('new')}
                  type="checkbox"
                  name="new"
                  value="true"
                />
              </label>
            </div>
          </div>
        </div>
        <h4 style={{ padding: 20 }}>
          {watch('person1') || 'Person 1'} and {watch('person2') || 'Person 2'}{' '}
          have no idea what they want to eat, but they do know they want
          something at most {watch('radius') || 'something close by.'}{' '}
          {watch('radius') ? 'miles away.' : ''} Let's start by pressing the
          button below
        </h4>
        <button
          style={{ height: 60, minWidth: '20%' }}
          type="submit"

        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Rules;
