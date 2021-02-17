import React, { useState } from 'react'
import { SmallText } from 'shared/typography'
import Slider from 'features/Slider'
import smoke from './assets/smoke.svg'
import parking from './assets/parking.svg'
import pool from './assets/pool.svg'
import service from './assets/cleaning.png'
import wifi from './assets/wifi.svg'
import breakfast from './assets/breakfast.svg'

import {
  Wrapper,
  Previews,
  Info,
  CardHeader,
  Row,
  Title,
  Params,
  Description,
  ParamsItem,
  Icon,
  Collapse,
  ScrollableParams,
  SmallPrice,
  Features,
  CollapseTitle,
} from './styled'

import Button from 'shared/components/Button'
import people from './assets/user.svg'

function RoomCardView({ room, vertical }) {
  const getOrderedUrls = () => room.urls.slice().sort()
  getOrderedUrls()
  const [featuresOpen, setFeaturesOpen] = useState(true)
  const getFeatures = featuresStr => featuresStr?.split(',').map(item => <div>{item}</div>)
  return (
    <Wrapper vertical={vertical}>
      <Previews>
        <Slider inner arrows={!vertical} height="316px" content={getOrderedUrls()} />
      </Previews>
      <Info>
        <CardHeader>
          <Row>
            <Description>
              <Title>{room.title}</Title>
              <SmallText>{room.description}</SmallText>
            </Description>
            <div>
              <SmallPrice>{room.price}</SmallPrice>
              <Button style={{ position: 'relative' }}>
                <span style={{ fontSize: '18px' }}>Book </span>
                {/* <SmallPrice>{room.price}</SmallPrice> */}
              </Button>
            </div>
          </Row>
        </CardHeader>
        {!vertical && (
          <div>
            <Row style={{ borderBottom: '1px solid #f6f6f6' }}>
              <Params>
                <ScrollableParams>
                  <ParamsItem>
                    <Icon src={people} alt="" />
                    {room.people} people max
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={smoke} alt="" />
                    Non-smoking
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={pool} alt="" />
                    Outdoor Pool
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={parking} alt="" />
                    Free Parking
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={service} alt="" />
                    Room Service
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={wifi} alt="" />
                    Free Wi-Fi
                  </ParamsItem>
                  <ParamsItem>
                    <Icon src={breakfast} alt="" />
                    Continental breakfast
                  </ParamsItem>
                </ScrollableParams>
              </Params>
            </Row>
            <Row>
              <Collapse open={featuresOpen}>
                <CollapseTitle>Room Features:</CollapseTitle>
                <Features>{getFeatures(room.features)}</Features>
              </Collapse>
            </Row>
          </div>
        )}
        {vertical && (
          <Collapse open={true}>
            <Params>
              <ParamsItem>
                <Icon src={people} alt="" />
                {room.people} people max
              </ParamsItem>
              <ParamsItem>
                <Icon src={smoke} alt="" />
                Non-smoking
              </ParamsItem>
              <ParamsItem>
                <Icon src={pool} alt="" />
                Outdoor Pool
              </ParamsItem>
              <ParamsItem>
                <Icon src={breakfast} alt="" />
                Continental breakfast
              </ParamsItem>
              <ParamsItem>
                <Icon src={parking} alt="" />
                Free Parking
              </ParamsItem>
              <ParamsItem>
                <Icon src={service} alt="" />
                Room Service
              </ParamsItem>
              <ParamsItem>
                <Icon src={wifi} alt="" />
                Free Wi-Fi
              </ParamsItem>
            </Params>
          </Collapse>
        )}
        {/* {!vertical && (
          <Description>
            <RegularText>{room.description}</RegularText>
          </Description>
        )} */}
      </Info>
    </Wrapper>
  )
}
export default RoomCardView
