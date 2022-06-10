import styled from 'styled-components'

interface IButtonProps {
  size?: 'small' | 'medium' | 'large' | undefined
  bgColor?: string | undefined
}

const sizes = {
  small: '1rem',
  medium: '1.5rem',
  large: '2rem'
}

export const CustomButton = styled.button<IButtonProps>`
  font-size: ${({ size }) => (size ? sizes[size] : '1rem')};
  background: ${({ bgColor }) => bgColor || '#c4c4c4'};
`
