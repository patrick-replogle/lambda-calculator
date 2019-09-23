import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button operator-button" onClick={() => props.operator === "=" ? 
      props.setDisplay(eval(props.diplay)) : props.setDisplay(props.display + props.operator)} >{props.operator}</button>
    </>
  );
};

export default OperatorButton;
