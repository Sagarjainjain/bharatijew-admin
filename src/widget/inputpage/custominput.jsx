import React from 'react';
import "./custominput.css"

const CustomInput = ({placeholder, onchange, cssproperty}) => {
  return (
    <input className={`custominput ${cssproperty} `} placeholder={placeholder} onChange={onchange}/>
  )
}

export default CustomInput