import React from 'react'
import { Wrapper, Header, Title, Time, Row, Name, Value, MapWrapper } from './styled'
function Map() {
  return (
    <Wrapper>
      <Header>
        <Title>Contact Us:</Title>
        <Time>8:00 a.m. - 9:00 p.m.</Time>
      </Header>
      <Row>
        <Name>Phone: </Name>
        <Value> 207-633-0353, 1-866-851-0450</Value>
      </Row>
      <Row>
        <Name>Adress: </Name>
        <Value>48 Lakeview Road, Boothbay Harbor, ME, 04538</Value>
      </Row>
      <Row>
        <Name>Email: </Name>
        <Value>stay@beachcovehotel.com</Value>
      </Row>
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0995799513967!2d-69.64323422869629!3d43.85376465831102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cad98e23ca4e297%3A0x9293547df225b883!2s48%20Lakeview%20Rd%2C%20Boothbay%20Harbor%2C%20ME%2004538%2C%20USA!5e0!3m2!1sen!2sid!4v1608453229000!5m2!1sen!2sid"
          width={600}
          height={450}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
      </MapWrapper>
    </Wrapper>
  )
}
export default Map
