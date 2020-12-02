import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'index'
import { SortBy, Stops } from 'shared/enums'
import { Segment, Ticket } from 'shared/types'

// UTILS
const getDuration = (segments: Segment[]) => {
  return segments.reduce((accum, current) => accum + current.duration, 0)
}

const sortTicketsByPrice = (tickets: Ticket[]): Ticket[] => {
  const ticketsCopy = [...tickets]
  return ticketsCopy.sort((prev, next) => prev.price - next.price)
}

const sortTicketsByDuration = (tickets: Ticket[]): Ticket[] => {
  const ticketsCopy = [...tickets]
  const sortedTickets = ticketsCopy.sort(
    (prev, next) => getDuration(prev.segments) - getDuration(next.segments),
  )
  return sortedTickets
}

export const filterTickets = (tickets: Ticket[], filters: Stops[]): Ticket[] => {
  return tickets.filter(ticket => {
    let filterPassed = false
    const stopsCount = ticket.segments.reduce(
      (accum, current) => (current.stops.length > accum ? current.stops.length : accum),
      0,
    )
    if (filters.includes(stopsCount)) filterPassed = true
    return filterPassed
  })
}

const getSortFunc = type => (type === SortBy.PRICE ? sortTicketsByPrice : sortTicketsByDuration)

// SELECTORS

export const selectSortType = createSelector(
  (state: RootState) => state.sort,
  sort => {
    return sort.type
  },
)

export const selectActiveFilters = createSelector(
  (state: RootState) => state.filters,
  filters => {
    return filters.active
  },
)

export const selectFilteredTickets = createSelector(
  (state: RootState) => state.tickets.entities,
  selectActiveFilters,
  (tickets, filters) => filterTickets(tickets, filters),
)

export const selectTickets = () => {
  return createSelector(selectFilteredTickets, selectSortType, (filteredTickets, sortBy) =>
    getSortFunc(sortBy)(filteredTickets).slice(0, 5),
  )
}

export const selectSearchStatus = () =>
  createSelector(
    (state: RootState) => state.tickets,
    tickets => tickets.stop,
  )

export const selectSearchSate = () =>
  createSelector(
    (state: RootState) => state.tickets,
    tickets => tickets.status,
  )

export const selectSearchId = () =>
  createSelector(
    (state: RootState) => state.tickets,
    tickets => {
      return tickets.searchId || null
    },
  )
