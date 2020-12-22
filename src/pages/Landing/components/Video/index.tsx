import React from 'react'
import { Wrapper, VideoContainer } from './styled'
function Video() {
  return (
    <Wrapper>
      <VideoContainer>
        <iframe
          title="promo"
          width={560}
          height={315}
          src="https://www.youtube.com/embed/woNiWXMaG0g"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoContainer>
    </Wrapper>
  )
}
export default Video
