import React from 'react'
import { Wrapper, TitleBlock, List, ListItem, Image } from './styled'
import { MainTitle, RegularText } from 'shared/typography'
import img from './img.jpg'
import canoe from './canoe.jpg'
import enjoy from './enjoy.jpg'
import family from './family.jpg'

function Amenities() {
  return (
    <Wrapper>
      <TitleBlock>
        <MainTitle>Amenities </MainTitle>
        <RegularText white>
          Relax by the pool or lakeside at Beach Cove or on your deck. Swim, canoe, fish or just
          enjoy the beauty of the grounds.
        </RegularText>
      </TitleBlock>
      <List>
        <ListItem>
          <Image src={img} />
          <RegularText>
            <b>Swim or lounge</b> in our pool or at the beach
          </RegularText>
        </ListItem>
        <ListItem>
          <Image src={canoe} />
          <RegularText>
            <b>Use our canoes</b> or rowboats to explore
          </RegularText>
        </ListItem>
        <ListItem>
          <Image src={family} />
          <RegularText>
            <b>Play a family game</b> of badminton in our lush green rolling grounds
          </RegularText>
        </ListItem>
        <ListItem>
          <Image src={enjoy} />
          <RegularText>
            <b>Enjoy</b> 3+ acres of rolling landscape
          </RegularText>
        </ListItem>
      </List>
    </Wrapper>
  )
}
export default Amenities
