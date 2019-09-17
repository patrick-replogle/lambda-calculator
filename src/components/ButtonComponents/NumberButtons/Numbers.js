import React, { useState } from "react";

//import any components needed
import { NumberButton } from "./NumberButton.js"
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
import { numbers } from "../../../data.js"
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [number, setNumber] = useState(numbers)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}

    </div>
  );
};
export default Numbers;
