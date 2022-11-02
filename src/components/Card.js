import React from 'react';
import "./componentStyle.css";

const Card = ({ title, image }) => {
  return (
    <div className='card-container'>
        <img src={image} />
        <div className='title'>{title}</div>
    </div>
  )
}

export default Card;