import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFilter, removeFilter, addAllFilter } from './duck/slice'
import FiltersView from './view'
import { Stops } from 'shared/enums'
import { selectActiveFilters } from './selectors'
import Checkbox from 'shared/components/Checkbox'

export default function Filters() {
  const dispatch = useDispatch()
  const activeFilters = useSelector(selectActiveFilters())

  const onChange = e => {
    const filter = parseInt(e.target.name)
    e.target.checked ? dispatch(addFilter(filter)) : dispatch(removeFilter(filter))
  }
  const checkAllFilters = () => {
    dispatch(addAllFilter())
  }

  const filtersOptions = [
    { label: 'Без пересадок', name: Stops.ZERO },
    { label: '1 пересадка', name: Stops.ONE },
    { label: '2 пересадки', name: Stops.TWO },
    { label: '3 пересадки', name: Stops.THREE },
  ]

  const getFilters = (options, onChange) =>
    options.map(item => {
      const { name, label } = item
      return (
        <Checkbox
          name={name}
          key={name}
          label={label}
          onChange={onChange}
          checked={activeFilters.includes(item.name)}
        />
      )
    })

  return (
    <FiltersView
      allFiltersChecked={activeFilters.length === 4}
      checkAllFilters={checkAllFilters}
      filters={getFilters(filtersOptions, onChange)}
    />
  )
}
