import React from 'react'
import { Wrapper, Item, ItemTitle, Icon } from './styled'
import muffin from '../../assets/muffin.svg'
import family from './assets/family.svg'
import map from './assets/map.svg'
import boat from './assets/boat.svg'
import sunset from './assets/sunset.svg'
import { SmallText } from 'shared/typography'

function Advantages() {
  return (
    <Wrapper>
      <Item>
        <Icon src={muffin} />
        <ItemTitle>Complimentary breakfast</ItemTitle>
        <SmallText>With homemade muffins, coffee and juice each morning</SmallText>
      </Item>
      <Item>
        <Icon src={family} />
        <ItemTitle>Family friendly</ItemTitle>
        <SmallText>
          Beach Cove offers a quiet, secluded getaway that provides the perfect location for family
          vacations.
        </SmallText>
      </Item>
      <Item>
        <Icon src={map} />
        <ItemTitle>Great location</ItemTitle>
        <SmallText>
          Located just off Route 27 one mile from the hustle and bustle of downtown Boothbay Harbor
        </SmallText>
      </Item>
      <Item>
        <Icon src={boat} />
        <ItemTitle>Free canoes</ItemTitle>
        <SmallText>
          We also offer rowboats and canoes along with life jackets <br /> free of charge
        </SmallText>
      </Item>
      <Item>
        <Icon src={sunset} />
        <ItemTitle>Stunning view</ItemTitle>
        <SmallText>
          We know you will enjoy coming home to relax and watch the beautiful sunset from your
          private balcony
        </SmallText>
      </Item>
    </Wrapper>
  )
}
export default Advantages
