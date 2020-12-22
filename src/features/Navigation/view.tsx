import React from 'react'
import Button from 'shared/components/Button'
import Container from 'shared/components/Container'
import { Wrapper, Logo, Menu, Item, Link } from './styled'

function NavigationView(props) {
  console.log(props.land)
  return (
    <Container>
      <Wrapper black={props.black}>
        <Logo to="/">
          Beach Cove <br />
          Waterfront Inn
        </Logo>
        <Menu>
          <Item>
            <Link to="/accomodation" activeClassName="link_active">
              Accomodation
            </Link>
          </Item>
          <Item>
            <Link to="/recreation" activeClassName="link_active">
              Recreation
            </Link>
          </Item>
          <Item>
            <Link to="/contact" activeClassName="link_active">
              Contact
            </Link>
          </Item>
          <Button>Book now</Button>
        </Menu>
      </Wrapper>
    </Container>
  )
}
export default NavigationView
