import React from 'react'
import { SmallText } from 'shared/typography'
import Container from '../Container'
import Map from '../Map'
import { Wrapper, Text, TextItem, Title, Subtitle, ContactInfo } from './styled'

function Regulations() {
  return (
    <Container>
      <Wrapper>
        <Text>
          <TextItem>
            <Title>Rates</Title>
            <Subtitle>
              All rates based on two people, add $10.00 per day per additional person
            </Subtitle>
            <SmallText>
              A one night deposit plus tax is required for room reservation. Prices subject to ME
              taxes. Rates higher on Holidays and weekends. A fourteen (14) day cancellation notice
              is required for refund of deposit.
            </SmallText>
          </TextItem>
          <TextItem>
            <Title>Regulations</Title>
            <Subtitle>
              For late arrival call the office. Check-in time 3 P.M. or later. Check out Time 11
              A.M. or earlier.
            </Subtitle>
            <SmallText>
              No refunds for early checkout. We accept all major credit cards: VISA, MASTERCARD,
              DISCOVER, AMERICAN EXPRESS. No personal checks accepted. All rooms are non-smoking. We
              have only few pet friendly rooms. Only pet friendly rooms will be hosting guests
              traveling with pets. Please contact the Inn prior to booking the room to enquire
              availability of this rooms and the pet policy.
            </SmallText>
          </TextItem>
        </Text>
        <ContactInfo>
          <Map />
        </ContactInfo>
      </Wrapper>
    </Container>
  )
}
export default Regulations
