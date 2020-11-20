import React from 'react'
import { Header, Title, WeekDays } from './styled'
import AddButton from 'features/Habits/components/AddButton'
import { Switch, Route } from 'react-router-dom'

type HabitsHeaderProps = {
  week: any[]
}

function HabitsHeaderView(props: HabitsHeaderProps) {
  const { week } = props
  return (
    <Header>
      <Title>
        <Switch>
          <Route path={'/dashboard/all'}>All</Route>
          <Route path={'/dashboard/morning'}>Morning</Route>
          <Route path={'/dashboard/afternoon'}>Afternoon</Route>
          <Route path={'/dashboard/evening'}>Evening</Route>
          <Route path={'/dashboard/group'}>Group</Route>
        </Switch>
      </Title>
      <Switch>
        <Route path={'/dashboard'}>
          <WeekDays>{week}</WeekDays>
          <AddButton />
        </Route>
      </Switch>
    </Header>
  )
}

export default HabitsHeaderView
