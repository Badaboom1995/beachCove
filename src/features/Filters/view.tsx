import React from 'react'
import Card from 'shared/components/Card'
import { Title, FiltersGroup } from './styled'
import Checkbox from 'shared/components/Checkbox'

export default function FiltersView(props) {
  return (
    <Card>
      <Title>Количество пересадок</Title>
      <FiltersGroup>
        <Checkbox
          name="all"
          label={'Все'}
          onChange={props.checkAllFilters}
          checked={props.allFiltersChecked}
        />
        {props.filters}
      </FiltersGroup>
    </Card>
  )
}
