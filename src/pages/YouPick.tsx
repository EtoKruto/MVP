import React, { useState, useEffect } from 'react';

import Mood from '../components/Mood';
import Choice_Grid from '../components/Choice_Grid';
import Final_Choice from '../components/Final_Choice';
import Details_Modal from '../components/Details_Modal';

interface PickProps {
  // propsDeconstructed: object;

}
function YouPick ({}: PickProps) {

  const [movie, setMovie] = useState<PickProps | null>(null);

  return (

    <div>
    <h1> THIS IS YouPick </h1>
    </div>

    );
  }

  export default YouPick ;