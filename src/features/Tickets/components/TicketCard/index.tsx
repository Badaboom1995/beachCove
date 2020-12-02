import React from 'react'
import Card from 'shared/components/Card'
import { Header, Segment, Price, CompanyIcon, InfoBlock, Title, Content, Wrapper } from './styled'
import moment from 'moment'

export default function TicketCard({ ticket }) {
  const getSegmentTime = (start: string, duration: number) => {
    const depart = moment(start).format('HH[:]mm')
    const arrive = moment(start).add(duration, 'minutes').format('HH[:]mm')
    return `${depart} - ${arrive}`
  }

  const getStopsTitle = (stops: String[]): String => {
    if (stops.length === 0) return 'Прямой'
    if (stops.length === 1) return '1 пересадка'
    return `${stops.length} пересадки`
  }

  const getPrice = (price: number): String => {
    const stringPrice = `${price}`
    const hundreds = stringPrice.substr(stringPrice.length - 3)
    const thousands = stringPrice.slice(0, -3)
    return `${thousands} ${hundreds} Р`
  }
  const getProcessedDuration = (duration: number): String => {
    const hours = `${Math.floor(duration / 60)}ч `
    const minutes = `${duration % 60}м `
    return `${hours}${minutes}`
  }

  return (
    <Card>
      <Wrapper>
        <Header>
          <Price>{getPrice(ticket.price)}</Price>
          <div style={{ width: '30%' }}>
            <CompanyIcon src={`//pics.avs.io/99/36/${ticket.carrier}.png`} />
          </div>
        </Header>
        {ticket.segments.map(segment => (
          <Segment key={segment.origin}>
            <InfoBlock>
              <Title>{`${segment.origin} - ${segment.destination}`}</Title>
              <Content>{getSegmentTime(segment.date, segment.duration)}</Content>
            </InfoBlock>
            <InfoBlock>
              <Title>В пути</Title>
              <Content>{getProcessedDuration(segment.duration)}</Content>
            </InfoBlock>
            <InfoBlock>
              <Title>{getStopsTitle(segment.stops)}</Title>
              <Content>{segment.stops.length ? segment.stops.join(',') : '-'}</Content>
            </InfoBlock>
          </Segment>
        ))}
      </Wrapper>
    </Card>
  )
}
