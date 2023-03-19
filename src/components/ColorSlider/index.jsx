import React, { useState } from 'react'
import './style.css'

const ColorSlider = ({ baseColor, colorName, onValueChange }) => {
  const [value, setValue] = useState(0)
  const handleChange = e => {
    onValueChange(e.target.value)
    setValue(e.target.value)
  }

  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type='range'
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min='0'
        max='255'
        value={value}
        onChange={handleChange}
      />
    </>
  )
}

export default ColorSlider
