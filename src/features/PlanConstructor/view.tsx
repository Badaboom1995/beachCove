import React from 'react'
import Stepper from 'shared/components/Stepper'
import PlanView from './components/PlanView'
import HabitPicker from './components/HabitPicker'
import process from './wizarddribbble.gif'
import { Wrapper } from './styled'

type PlanConstructorView = {
  setHabits: (habit: any) => void
  habits: any
}
function PlanConstructorView(props: PlanConstructorView) {
  return (
    <Wrapper>
      <Stepper>
        <HabitPicker setHabits={props.setHabits} habits={props.habits} />
        <div>
          <img
            style={{ width: '700px', marginLeft: '-200px', marginTop: '-80px' }}
            src={process}
            alt=""
          />
          <p style={{ textAlign: 'center' }}>Creating your personal plan...</p>
        </div>
        <PlanView habits={props.habits} />
        <div>Done</div>
      </Stepper>
    </Wrapper>
  )
}

export default PlanConstructorView
