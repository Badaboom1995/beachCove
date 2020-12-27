import React from 'react'
import { Helmet } from 'react-helmet-async'

import Navigation from 'features/Navigation'
import Footer from 'shared/components/Footer'
import { Wrapper, Directions, Content, Section } from './styled'
import Map from 'shared/components/Map'
import { BigText, RegularText, SmallText } from 'shared/typography'

export function Contacts() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Navigation black={window.innerWidth > 767} />
      <Wrapper>
        <Content>
          <Directions>
            <BigText style={{ fontWeight: 700, margin: 0, marginBottom: '30px' }}>
              Directions
            </BigText>
            <Section>
              <RegularText>By Air:</RegularText>
              <SmallText>
                Portland International Jetport is approximately 1.5 hours to our south. You may rent
                a car to allow for plenty of exploring along the coast. Taxi and limousine service
                is also available. There is also a private airport in Wiscasset.
              </SmallText>
            </Section>
            <Section>
              <RegularText>By Car:</RegularText>
              <SmallText>
                Coming from the South follow I-95 North and I-295 North, from Boston to Brunswick,
                ME. From there take exit 28 or exit 31 to Route 1 North. Then follow signs for
                Coastal Route 1 North (through Bath and Wiscasset). Just after Wiscasset, take a
                right on Route 27 South to Boothbay Harbor (12 miles). At the traffic light in town
                go straight up the hill and bear right at the Congregational Church onto Oak Street.
                Bear right on West Street. At the stop sign take a right. After passing St. Andrews
                Hospital on your left, take the next right onto Lakeview Road. Beach Cove Waterfront
                Inn is about 3/10ths of a mile on your left. <br />
                <br /> Welcome!
              </SmallText>
            </Section>
          </Directions>
          <Map />
        </Content>
      </Wrapper>
      <Footer />
    </>
  )
}
