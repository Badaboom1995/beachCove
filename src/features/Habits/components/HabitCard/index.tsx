import React from 'react'
import { updateHabitAsync } from 'shared/core/habits/duck/actions'
import { useDispatch } from 'react-redux'
import { HabitType } from 'shared/core/habits/types'
import HabitCardView from './view'
import moment from 'moment'
import { checkCompleted } from 'utils/custom'

type HabitProps = {
  habit: HabitType
}

enum HabitStatus {
  'completed',
  'skipped',
}
type Status = HabitStatus

const HabitCard = (props: HabitProps) => {
  const dispatch = useDispatch()
  const { habit } = props
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`)
  }
  const prepareHabitForView = () => {
    const { id, name, color, state: stateArray, duration } = habit
    const state = `${stateArray.length}/${duration}`
    const isCompleted = checkCompleted(habit.state)
    const streak = (() => {
      let streakCounter = 0
      habit.state.forEach(item => {
        streakCounter = item.type === 'skipped' ? 0 : streakCounter + 1
      })
      return streakCounter
    })()
    const percent = Math.round(habit.state.length / (parseInt(habit.duration) / 100))

    return { id, name, color, state, streak, percent, stateArray, isCompleted }
  }
  const setStatus = (habit, status: Status) => {
    const updatedState = [...habit.stateArray, { type: status, date: moment().toString() }]
    dispatch(updateHabitAsync({ id: habit.id, state: updatedState }))
  }
  const unsetStatus = habit => {
    const habitState = [...habit.stateArray]
    habitState.pop()
    dispatch(updateHabitAsync({ id: habit.id, state: habitState }))
  }
  return (
    <HabitCardView
      unsetStatus={unsetStatus}
      setStatus={setStatus}
      onChange={onChange}
      habit={prepareHabitForView()}
    />
  )
}
export default HabitCard
