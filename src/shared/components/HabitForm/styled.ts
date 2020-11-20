import styled from 'styled-components'
import { Radio, Checkbox, Input, Button } from 'antd'
import { darken } from 'polished'

type FieldProps = {
  color: string
  width?: string
}

const getColor = props => props.color

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 92px;
`
export const TopWrapper = styled.div`
  display: flex;
  position: relative;
`
export const ColorWrapper = styled.div`
  position: absolute;
  right: 5px;
`
export const SectionTitle = styled.h2`
  position: relative;
  font-size: 14px;
  color: #7e7e7e;
  text-align: center;
  margin-bottom: 20px;
  span {
    position: relative;
    padding: 0 15px;
    background-color: #fff;
    z-index: 1;
  }
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 12px;
    width: 100%;
    height: 1px;
    background-color: #efefef;
  }
`
export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  border-radius: 5px;
  background-color: #3a3939;
  border-color: transparent;
  height: 38px;
  font-size: 15px;
  &:hover,
  &:active,
  &:focus {
    background-color: ${darken(0.3, '#3a3939')};
    border-color: transparent;
  }
`

export const StyledInput = styled(Input)<FieldProps>`
  border-radius: 5px;
  &:hover,
  &:focus {
    border-color: ${getColor};
    box-shadow: 0 0 0 2px ${props => `${props.color}20`};
  }
`

export const CheckboxGroup = styled(Checkbox.Group)<FieldProps>`
  display: flex;
  justify-content: space-between;
  .ant-checkbox {
    display: none;
  }
  label {
    width: ${100 / 7 - 2}%;
    background-color: transparent;
    line-height: 32px;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    transition: all 0.3s;
    border: 1px solid #efefef;
    &:hover {
      border-color: ${getColor};
    }
    &.ant-checkbox-wrapper-checked {
      background-color: ${getColor};
      color: #fff;
    }
  }
`

export const RadioGroup = styled(Radio.Group)<FieldProps>`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  label {
    text-align: center;
    border-radius: 5px;
    border-left-width: 1px;
  }
  .ant-radio-button-wrapper {
    padding: 0;
    margin-bottom: 10px;
    width: ${props => (props.width ? props.width : '48%')};
    border-color: #efefef;
    background-color: transparent;
    &:hover {
      border-color: ${getColor};
      color: #000;
    }
    &:first-child,
    &:last-child {
      border-radius: 5px;
    }
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none;
  }
  .ant-radio-button-wrapper-checked:not([class*=' ant-radio-button-wrapper-disabled']).ant-radio-button-wrapper:first-child {
    border-right-color: transparent;
  }
  .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    background-color: ${getColor};
    border: 1px solid ${getColor};
    &:focus-within {
      box-shadow: 0 0 0 3px ${props => `${props.color}10`};
    }
    &:hover {
      background-color: ${getColor};
      border: 1px solid ${getColor};
    }
    &:before {
      background-color: ${getColor};
    }
  }
`
