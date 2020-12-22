import React from 'react'
import { Pictures } from './styled'
import Slider from 'features/Slider'

function PicturesView() {
  return (
    <Pictures>
      <Slider inner arrows height="400px" />
    </Pictures>
  )
}
export default PicturesView
