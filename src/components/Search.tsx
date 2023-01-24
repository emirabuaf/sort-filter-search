import InputComponent from "./InputComponent";

interface SearchProps {
  value: string;
  setValue: (e: string) => void
}

const Search = ({ value, setValue }: SearchProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <InputComponent value={value} handleChange={handleChange} placeholder={'Search by name'} />
}

export default Search;