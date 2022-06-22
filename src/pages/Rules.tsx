import React, { useState, useEffect } from 'react';

interface RulesProps {
  // propsDeconstructed: object;

}
function Rules ({}: RulesProps) {

  const [movie, setMovie] = useState<RulesProps | null>(null);

  return (

    <div>
    <h1> THIS IS RULES </h1>
    </div>

    );
  }

  export default Rules ;