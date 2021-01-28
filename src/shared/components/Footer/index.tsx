import React from 'react'
import { RegularText, SmallText } from 'shared/typography'
import { Wrapper, Section, Social, Icon, Content } from './styled'
import expedia from './assets/expedia.png'
import trip from './assets/trip.png'
import booking from './assets/booking.png'
import Container from '../Container'

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Section>
            <RegularText style={{ fontWeight: 700 }}>Contact Us: </RegularText>
            <RegularText>stay@beachcovehotel.com</RegularText>
            <RegularText>1.866.851.0450 or 207.633.0353</RegularText>
          </Section>
          <Section>
            <RegularText style={{ textAlign: 'center', marginBottom: '15px', fontWeight: 700 }}>
              Follow us
            </RegularText>
            <Social>
              <a href="">
                <Icon src={expedia} />
              </a>
              <a href="">
                <Icon src={trip} />
              </a>
              <a href="">
                <Icon src={booking} />
              </a>
            </Social>
          </Section>
          <Section style={{ display: 'flex', flexDirection: 'column-reverse' }}>
            <SmallText>© 2020 Beach Cove Hotel. All rights reserved.</SmallText>
          </Section>
        </Content>
      </Container>
    </Wrapper>
  )
}
export default Footer
