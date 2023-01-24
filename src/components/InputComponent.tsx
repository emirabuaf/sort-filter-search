import { StyledInput } from './styles/InputComponent.styled'

interface InputComponentProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
}

const InputComponent = ({ placeholder, value, handleChange }: InputComponentProps) => {
  return (
    <StyledInput value={value} onChange={handleChange} placeholder={placeholder} />
  )
}

export default InputComponent;