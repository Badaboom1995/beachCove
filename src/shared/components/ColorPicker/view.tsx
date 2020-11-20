import React from 'react'
import { Button, Dropdown, Card } from 'antd'
import { CirclePicker } from 'react-color'

function ColorPickerView(props) {
  const { onChange, color } = props
  return (
    <Dropdown
      placement="bottomLeft"
      overlay={
        <Card style={{ borderRadius: '10px', padding: '10px' }}>
          <CirclePicker onChange={onChange} />
        </Card>
      }
    >
      <Button
        type="text"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '5px',
          marginRight: '-10px',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            borderColor: color,
            background: color,
          }}
        ></div>
      </Button>
    </Dropdown>
  )
}
export default ColorPickerView
