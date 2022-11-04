import React from 'react';
import "./componentStyle.css";

const Buttons = ({ text, clicked }) => {
  return (
    <div className='button' onClick={clicked}>{text}</div>
  )
}

export default Buttons;