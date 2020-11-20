/* eslint-disable no-template-curly-in-string */
import React from 'react'
import AddHabitView from './view'
import { Form } from 'antd'

type AddHabitProps = {
  onSubmit: (p: void) => void
  defaultValues?: {
    name: string
    duration: string
    color: string
    track: any
    time: string
    repeat: string[]
  }
}

const AddHabit = (props: AddHabitProps) => {
  const [form] = Form.useForm()
  const { onSubmit, defaultValues } = props
  const initialValues = defaultValues || {
    name: '',
    duration: '14',
    color: '#4caf50',
    track: {},
    time: 'morning',
    repeat: ['mo', 'tu', 'we', 'th', 'fr', 'st', 'su'],
  }

  const onFinish = values => {
    onSubmit(values)
    form.resetFields()
  }
  const onFail = values => {
    console.log(values)
  }
  function onColorChange(color) {
    form.setFieldsValue({ color })
  }

  return (
    <AddHabitView
      initialValues={initialValues}
      onFinish={onFinish}
      onFail={onFail}
      onColorChange={onColorChange}
      form={form}
    />
  )
}

export default AddHabit
