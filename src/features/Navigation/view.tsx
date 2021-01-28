import React, { useState } from 'react'
import Button from 'shared/components/Button'
import Container from 'shared/components/Container'
import { Wrapper, Logo, Menu, Item, Link, Toggle } from './styled'

function NavigationView(props) {
  const [isOpen, setMenu] = useState(false)
  return (
    <Container>
      <Wrapper black={props.black}>
        <Logo to="/">
          Beach Cove <br />
          Waterfront Inn
        </Logo>
        <Toggle
          onClick={() => {
            isOpen ? setMenu(false) : setMenu(true)
          }}
          isOpen={isOpen}
        />
        <Menu isOpen={isOpen}>
          <Item>
            <Link to="/accommodation" activeClassName="link_active">
              Accommodation
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
