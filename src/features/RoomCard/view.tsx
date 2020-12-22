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

function RoomCardView() {
  const params = {
    beds: { single: 2, double: 1 },
    people: 6,
  }

  return (
    <Wrapper>
      <Previews>
        <Slider inner arrows height="316px" />
      </Previews>
      <Info>
        <CardHeader>
          <Row>
            <Title>Balcony Rooms</Title>
            <Price>$85-$135 </Price>
          </Row>
          <Row>
            <Params>
              <ParamsItem>
                <Icon src={single} alt="" />
                <Number>{params.beds.single}</Number> single beds
              </ParamsItem>
              <ParamsItem>
                <Icon src={double} alt="" />
                <Number>{params.beds.double}</Number> double beds
              </ParamsItem>
              <ParamsItem>
                <Icon src={people} alt="" />
                <Number>{params.people}</Number> people max
              </ParamsItem>
            </Params>
            <Button>Book</Button>
          </Row>
        </CardHeader>
        <Description>
          <RegularText>
            These rooms are located on the first floor and offer superb views of the waters and
            sunsets from the private balcony. Accommodations include 1 king size bed, TV, A/C, mini
            fridge, microwave oven, coffee maker and shower. Sleeps up to 2 people.
          </RegularText>
        </Description>
      </Info>
    </Wrapper>
  )
}
export default RoomCardView
