import React from 'react';
import "./customcard.css";

const CustomCard = ({title, totalnumber}) => {
  return (
    <div className='customcard'>
      <h2>{title}</h2>
      <p>{totalnumber}</p>
    </div>
  )
}

export default CustomCard