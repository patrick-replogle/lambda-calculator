import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

console.log(operators)

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operator] = useState(operators)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operator.map((data, index) => {
         return <OperatorButton key={index} operatorData={data.char}/>
       })}
    </div>
  );
};

export default Operators;
