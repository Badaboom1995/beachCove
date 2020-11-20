import React from 'react'
import { DayBlock, Day } from './styled'
import HabitsHeaderView from './view'
import moment from 'moment'

function HabitsHeader() {
  const getWeek = () => {
    const week: any[] = []
    for (let i = 1; i < 8; i++) {
      const weekday = moment().isoWeekday(i)
      week.push(
        <DayBlock key={i}>
          <Day>{weekday.format('D')}</Day>
          <Day>{weekday.format('dd')}</Day>
        </DayBlock>,
      )
    }
    return week
  }
  return <HabitsHeaderView week={getWeek()} />
}

export default HabitsHeader
