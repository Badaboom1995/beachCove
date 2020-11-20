import React, { useEffect, useState } from 'react'
import { Form } from 'antd'
import ColorPicker from 'shared/components/ColorPicker'
import {
  RadioGroup,
  CheckboxGroup,
  StyledInput,
  StyledButton,
  SectionTitle,
  TopWrapper,
  ColorWrapper,
} from './styled'

type AddHabitsProps = {
  onFail: (any) => void
  onFinish: (any) => void
  onColorChange: (any) => void
  type: string
  form: any
  focus?: boolean
  defaultColor: string
}

const HabitFormView = (props: AddHabitsProps) => {
  const { onFail, onFinish, form, defaultColor, type, focus } = props
  const [color, setColor] = useState(defaultColor)
  useEffect(() => {
    setColor(defaultColor)
  }, [defaultColor])
  function onColorChange(color) {
    form.setFieldsValue({ color })
    setColor(color)
  }

  return (
    <Form form={form} name="basic" onFinish={onFinish} onFinishFailed={onFail}>
      <TopWrapper>
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Please, input habit name' }]}
          style={{ flexGrow: 1 }}
        >
          <StyledInput autoFocus={focus} color={color} placeholder={'input habit name'} />
        </Form.Item>
        <ColorWrapper>
          <Form.Item name="color">
            <ColorPicker onChange={onColorChange} defaultColor={color} />
          </Form.Item>
        </ColorWrapper>
      </TopWrapper>

      {type === 'create' && (
        <>
          <SectionTitle>
            <span>My goal is</span>
          </SectionTitle>
          <Form.Item name="duration">
            <RadioGroup
              color={color}
              width={'23%'}
              optionType="button"
              buttonStyle="solid"
              options={[
                { label: '7 days', value: '7' },
                { label: '14 days', value: '14' },
                { label: '21 days', value: '21' },
                { label: '30 days', value: '30' },
              ]}
            />
          </Form.Item>
        </>
      )}
      <SectionTitle>
        <span>Repeat on these days</span>
      </SectionTitle>
      <Form.Item name="repeat" style={{ marginBottom: '10px' }}>
        <CheckboxGroup
          color={color}
          options={[
            { value: 'mo', label: 'M' },
            { value: 'tu', label: 'T' },
            { value: 'we', label: 'W' },
            { value: 'th', label: 'T' },
            { value: 'fr', label: 'F' },
            { value: 'st', label: 'S' },
            { value: 'su', label: 'S' },
          ]}
        />
      </Form.Item>
      <Form.Item name="repeat">
        <RadioGroup
          color={color}
          optionType="button"
          buttonStyle="solid"
          width={'31%'}
          options={[
            { value: 'mo tu we th fr st su', label: 'Every day' },
            { value: 'mo tu we th fr', label: 'Weekdays' },
            { value: 'st su', label: 'Weekend' },
          ]}
        />
      </Form.Item>
      <SectionTitle>
        <span>I will do it</span>
      </SectionTitle>
      <Form.Item name="time" style={{ marginBottom: '0' }}>
        <RadioGroup
          color={color}
          width={'31%'}
          optionType="button"
          buttonStyle="solid"
          options={[
            { label: 'Morning', value: 'morning' },
            { label: 'Afternoon', value: 'afternoon' },
            { label: 'Evening', value: 'evening' },
          ]}
        />
      </Form.Item>
      <Form.Item name="time">
        <RadioGroup
          color={color}
          width={'100%'}
          optionType="button"
          buttonStyle="solid"
          options={[{ label: 'All the day', value: 'allDay' }]}
        />
      </Form.Item>

      <StyledButton type="primary" htmlType="submit">
        {type === 'update' ? 'Update' : 'Create'}
      </StyledButton>
    </Form>
  )
}

export default HabitFormView
