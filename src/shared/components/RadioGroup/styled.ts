import styled from 'styled-components'
import { Radio } from 'antd'
import { RadioGroupProps } from './index'

const getColor = props => props.color

export const RadioGroupStyled = styled(Radio.Group)<RadioGroupProps>`
  color: black;
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: ${getColor};
    border: 1px solid ${getColor};
    &:hover {
      background-color: ${getColor};
      border: 1px solid ${getColor};
    }
    &:before {
      background-color: ${getColor};
    }
  }
  .ant-radio-button-wrapper:hover {
    color: ${getColor};
  }
`
