import React from 'react'
import { Wrapper, Button } from './styled'
import { SortBy } from './duck/slice'
import { useSelector } from 'react-redux'
import { RootState } from 'index'

function SortView(props) {
  const sortType = useSelector((state: RootState) => state.sort.type)
  return (
    <Wrapper>
      <Button
        onClick={() => {
          props.chooseSort(SortBy.PRICE)
        }}
        style={{ borderRadius: '5px 0 0 5px' }}
        active={sortType === SortBy.PRICE}
      >
        Самый дешевый
      </Button>
      <Button
        onClick={() => {
          props.chooseSort(SortBy.DURATION)
        }}
        style={{ borderRadius: '0px 5px 5px 0px' }}
        active={sortType === SortBy.DURATION}
      >
        Самый быстрый
      </Button>
    </Wrapper>
  )
}
export default SortView
