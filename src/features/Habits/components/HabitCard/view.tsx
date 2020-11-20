import React from 'react'
import {
  Wrapper,
  Title,
  Skip,
  LeftBlock,
  ProgressBar,
  RightBlock,
  StyledCheckbox,
  Info,
  StreakIcon,
  StyledLink,
} from './styled'
import Satus from '../HabitStatus'
import { checkCompleted, getCurrentStatus } from 'utils/custom'

type HabitProps = {
  habit: {
    id: string
    color: string
    name: string
    state: string
    streak: number
    percent: number
    stateArray: any
    isCompleted: boolean
  }
  onChange: any
  setStatus: any
  unsetStatus: any
}

const HabitCardView = ({ habit, setStatus, unsetStatus }: HabitProps) => {
  const currentStatus = getCurrentStatus(habit.stateArray)
  return (
    <Wrapper currentStatus={currentStatus}>
      <StyledLink to={`/dashboard/all/${habit.id}`} />
      <ProgressBar percent={habit.percent} color={habit.color} />
      <LeftBlock>
        <StyledCheckbox
          onChange={e => {
            e.target.checked ? setStatus(habit, 'completed') : unsetStatus(habit)
          }}
          checked={checkCompleted(habit.stateArray)}
          skipped={currentStatus === 'skipped'}
        >
          <Title>{habit.name}</Title>
        </StyledCheckbox>
      </LeftBlock>
      <RightBlock>
        <Satus status={habit.stateArray} />
        <Info>
          <span>{habit.state}</span>
          <span>
            <StreakIcon /> {habit.streak}
          </span>
        </Info>
        <Skip
          disabled={checkCompleted(habit.stateArray)}
          themename="default"
          onClick={() => {
            setStatus(habit, 'skipped')
          }}
        >
          Skip
        </Skip>
      </RightBlock>
    </Wrapper>
  )
}
export default HabitCardView
