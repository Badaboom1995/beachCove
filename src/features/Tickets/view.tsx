import React from 'react'
import TicketCard from './components/TicketCard'
import { Wrapper } from './styled'
import loader from './assets/loader.gif'

function TicketsView({ tickets, stop }) {
  return (
    <Wrapper>
      {tickets.length && !stop ? (
        <p
          style={{
            textAlign: 'center',
            position: 'absolute',
            top: '-110px',
            left: '50%',
            width: '300px',
            transform: 'translateX(-50%)',
            fontSize: '12px',
          }}
        >
          <img style={{ width: '20px', marginRight: '15px' }} src={loader} alt="" />
          Ищем дешевые авиабилеты
        </p>
      ) : (
        ''
      )}
      {tickets.length ? (
        tickets.map(ticket => (
          <TicketCard key={ticket.price + ticket.carrier} ticket={ticket}></TicketCard>
        ))
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '50px',
          }}
        >
          <img style={{ width: '50px' }} src={loader} alt="" />
          <p>Начинаем поиск</p>
        </div>
      )}
    </Wrapper>
  )
}
export default TicketsView
