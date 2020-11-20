import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectHabitById } from 'shared/core/habits/selectors'
import HabitInfoView from './view'

const HabitInfo = () => {
  let { id }: any = useParams()
  const habit = useSelector(selectHabitById(id))
  return <HabitInfoView habit={habit} />
}
export default HabitInfo
