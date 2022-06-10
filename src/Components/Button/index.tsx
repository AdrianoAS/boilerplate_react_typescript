import { CustomButton } from './style'

interface IButtonProps {
  size?: 'small' | 'medium' | 'large'
  title: string
  bgColor?: string
}

const Button = ({ title, size, bgColor }: IButtonProps) => {
  return (
    <CustomButton size={size} bgColor={bgColor}>
      {title ? title : 'Salvar'}
    </CustomButton>
  )
}

export default Button
