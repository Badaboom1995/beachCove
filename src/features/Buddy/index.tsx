/* eslint-disable no-template-curly-in-string */
import React, { useState } from 'react'
import { Buddy } from './styled'

type BuddyProps = {}

const BuddyComponent = (props: BuddyProps) => {
  const [active, setActive] = useState(false)
  const toggleActive = () => {
    active ? setActive(false) : setActive(true)
  }
  return <Buddy onClick={toggleActive} active={active}></Buddy>
}

export default BuddyComponent
