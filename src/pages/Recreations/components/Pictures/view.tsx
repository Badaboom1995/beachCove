import React from 'react'
import { Pictures } from './styled'
import Slider from 'features/Slider'
import picnic from 'assets/picnic.jpg'
import boats from 'assets/boats.jpg'
import pool from 'assets/pool.jpg'

function PicturesView() {
  return (
    <Pictures>
      <Slider content={[picnic, boats, pool]} inner arrows height="400px" />
    </Pictures>
  )
}
export default PicturesView
