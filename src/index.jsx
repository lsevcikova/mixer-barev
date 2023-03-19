import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import ColorSlider from './components/ColorSlider'

const App = () => {
  const [redValue, setRedValue] = useState(0)
  const [greenValue, setGreenValue] = useState(0)
  const [blueValue, setBlueValue] = useState(0)

  const handleRedValue = value => {
    setRedValue(value)
  }

  const handleGreenValue = value => {
    setGreenValue(value)
  }

  const handleBlueValue = value => {
    setBlueValue(value)
  }

  return (
    <div className='color-panel'>
      <h1>Mixér barev</h1>
      <div className='sliders'>
        <ColorSlider
          colorName={'Červená'}
          baseColor={'red'}
          onValueChange={handleRedValue}
        />
        <ColorSlider
          colorName={'Zelená'}
          baseColor={'green'}
          onValueChange={handleGreenValue}
        />
        <ColorSlider
          colorName={'Modrá'}
          baseColor={'blue'}
          onValueChange={handleBlueValue}
        />
      </div>
      <div
        className='color-box'
        id='color-box'
        style={{
          backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`
        }}
      ></div>
    </div>
  )
}

createRoot(document.querySelector('#app')).render(<App />)
