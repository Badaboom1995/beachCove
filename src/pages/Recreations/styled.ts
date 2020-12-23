import { colors } from 'shared/colors'
import Container from 'shared/components/Container'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  padding-top: 160px;
  position: relative;
`
export const Section = styled(Container)`
  display: flex;
  align-items: center;
  background-color: ${colors.lightGrey};
  padding: 30px 20px;
  margin-bottom: 30px;
`
export const Text = styled.div`
  width: 38%;
  padding: 0 20px;
`
export const List = styled.ul`
  padding: 0;
`
export const Item = styled.li`
  font-family: 'Lato';
  list-style: none;
  color: ${colors.black};
  margin-bottom: 15px;
`
export const Pictures = styled.div`
  position: relative;
  flex-grow: 1;
  height: 380px;
  background-color: #ccc;
`
export const CarouselBlock = styled.div`
  text-align: center;
  padding: 20px 0;
`
export const CarouselWrapper = styled.div``
