import React from 'react'
import { RegularText } from 'shared/typography'
import Slider from 'features/Slider'
import {
  Wrapper,
  Previews,
  Info,
  CardHeader,
  Row,
  Title,
  Price,
  Params,
  Description,
  ParamsItem,
  Icon,
  Number,
} from './styled'
import Button from 'shared/components/Button'
import single from './assets/single-bed.svg'
import double from './assets/double-bed.svg'
import people from './assets/user.svg'

function RoomCardView({ room }) {
  const params = {
    beds: { single: 2, double: 1 },
    people: 6,
  }

  return (
    <Wrapper>
      <Previews>
        <Slider inner arrows height="316px" content={room.urls} />
      </Previews>
      <Info>
        <CardHeader>
          <Row>
            <Title>{room.title}</Title>
            <Price>{room.price}</Price>
          </Row>
          <Row>
            <Params>
              {room.single ? (
                <ParamsItem>
                  <Icon src={single} alt="" />
                  <Number>{room.single}</Number> single beds
                </ParamsItem>
              ) : (
                ''
              )}
              {room.double ? (
                <ParamsItem>
                  <Icon src={double} alt="" />
                  <Number>{room.double}</Number> double beds
                </ParamsItem>
              ) : (
                ''
              )}
              <ParamsItem>
                <Icon src={people} alt="" />
                <Number>{room.people}</Number> people max
              </ParamsItem>
            </Params>
            <Button>Book</Button>
          </Row>
        </CardHeader>
        <Description>
          <RegularText>{room.description}</RegularText>
        </Description>
      </Info>
    </Wrapper>
  )
}
export default RoomCardView
