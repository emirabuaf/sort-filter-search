import { Dispatch, SetStateAction } from "react";

const companyTypes = [{ name: 'AB' }, { name: 'HB' }, { name: 'EF' }]


interface SelectComponentProps {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>
}

const SelectComponent = ({ filter, setFilter }: SelectComponentProps) => {

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <select value={filter} onChange={handleChange}>
        <option value="">
          All Company Types
        </option>
        {companyTypes.map((option, index) => (
          <option key={index} value={option.name}>{option.name}</option>
        ))}
      </select>
    </div>
  )
}


export default SelectComponent;