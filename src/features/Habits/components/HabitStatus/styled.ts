import styled from 'styled-components'
import check from '../../assets/check.svg'
import plus from '../../assets/plus.svg'
import empty from '../../assets/empty.svg'

const chooseIcon = props => {
  const key = props.type
  switch (key) {
    case 'skipped':
      return plus
    case 'completed':
      return check
    case 'coming':
      return empty
  }
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 92px;
`
type StatusItemProps = {
  type?: string
}
export const StatusItem = styled.span<StatusItemProps>`
  display: inline-block;
  transform: ${props => props.type === 'skipped' && 'rotate(45deg)'};
  width: 13px;
  height: 13px;
  margin-right: 10.5px;
  padding: 3px;
  background-image: url(${chooseIcon});
  background-size: cover;
  cursor: pointer;
`
