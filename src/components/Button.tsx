import { StyledButton } from './styles/Button.styled'

interface ButtonComponentProps {
  onClick: () => void;
  value: any;
}

const Button = (props: ButtonComponentProps) => {
  return (
    <StyledButton onClick={props.onClick}>{props.value}</StyledButton>
  )
}

export default Button;