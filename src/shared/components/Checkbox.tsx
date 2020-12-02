import React from 'react'
import { colors } from 'shared/styles'
import styled from 'styled-components'

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  display: flex;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background: #f1fcff;
  }
`

const Label = styled.span`
  font-size: 13px;
  color: ${colors.black};
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

type StyledCheckboxType = { checked: Boolean }
const StyledCheckbox = styled.div<StyledCheckboxType>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  border: 1px solid #9abbce;
  border-radius: 2px;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    border-color: #2196f3;
  }

  ${HiddenCheckbox}:checked + & {
    border-color: #2196f3;
  }

  ${HiddenCheckbox}:checked + &:after {
    content: '';
    display: block;
    position: absolute;
    left: 3px;
    top: 3px;
    transform: rotate(-45deg);
    width: 12px;
    height: 7px;
    border-left: 2px solid #2196f3;
    border-bottom: 2px solid #2196f3;
  }
`

const Checkbox = ({ checked, label, name, onChange, ...props }: any) => (
  <CheckboxContainer>
    <HiddenCheckbox name={name} checked={checked} onChange={onChange} {...props} />
    <StyledCheckbox checked={checked}></StyledCheckbox>
    <Label>{label}</Label>
  </CheckboxContainer>
)

export default Checkbox
