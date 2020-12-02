/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import TicketsView from './view'
import { useDispatch, useSelector } from 'react-redux'
import { getTicketsPack, searchInit } from './duck/action'
import { selectTickets, selectSearchStatus, selectSearchId, selectSearchSate } from './selectors'

import { Status } from 'shared/enums'

export default function Tickets() {
  const dispatch = useDispatch()
  const tickets = useSelector(selectTickets())
  const searchId = useSelector(selectSearchId())
  const stop = useSelector(selectSearchStatus())
  const status = useSelector(selectSearchSate())

  useEffect(() => {
    dispatch(searchInit())
  }, [])

  useEffect(() => {
    if (searchId && !stop && status !== Status.WAITING) {
      const id = setInterval(() => {
        dispatch(getTicketsPack(searchId))
      }, 500)
      return () => {
        clearInterval(id)
      }
    }
  }, [searchId, stop])

  return (
    <div>
      <TicketsView tickets={tickets} stop={stop} />
    </div>
  )
}
