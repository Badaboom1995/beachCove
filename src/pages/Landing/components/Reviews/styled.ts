import styled from 'styled-components'
import Card from 'shared/components/Card'

export const Wrapper = styled.div`
  padding: 50px 0px;
`
export const List = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ReviewContainer = styled(Card)`
  width: 320px;
  padding: 20px;
`
export const AuthorBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
`
export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 10px;
`
export const Author = styled.span`
  font-family: 'Lato';
  font-size: 14px;
`
export const Title = styled.p`
  font-family: 'Lato';
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  margin: 10px 0;
  color: #000000;
`
