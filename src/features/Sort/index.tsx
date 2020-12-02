import React from 'react'
import { useDispatch } from 'react-redux'
import { setSort } from './duck/slice'
import SortView from './view'

export default function Sort() {
  const dispatch = useDispatch()
  return (
    <SortView
      chooseSort={sortBy => {
        dispatch(setSort(sortBy))
      }}
    />
  )
}
