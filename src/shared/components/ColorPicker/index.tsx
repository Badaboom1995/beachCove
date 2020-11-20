import React, { useState } from 'react'
import ColorPickerView from './view'

type colorPickerProps = {
  onChange: (p: void) => void
  defaultColor: string
}

function ColorPicker(props: colorPickerProps) {
  const [color, setColor] = useState(props.defaultColor || '#40a9ff')
  const onColorChange = (color, e) => {
    setColor(color.hex)
    props.onChange(color.hex)
  }
  return <ColorPickerView onChange={onColorChange} color={color} />
}
export default ColorPicker
