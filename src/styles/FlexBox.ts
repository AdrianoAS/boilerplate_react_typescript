import styled from 'styled-components'

export interface IFlexBoxProps {
  dFlex?: boolean
  fdColumn?: boolean
  alItems?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'end'
    | 'baseline'
    | undefined
  jfContent?:
    | 'start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'end'
    | undefined
}

export const FlexBox = styled.div<IFlexBoxProps>`
  display: ${props => (props.dFlex ? 'flex' : '')};
  flex-direction: ${props => (props.fdColumn ? 'column' : 'row')};
  align-items: ${props => props.alItems};
  justify-content: ${props => props.jfContent};
`
