import { CompanyData } from '../App'

interface CompanyProps {
  item: CompanyData
}

const Company = ({ item }: CompanyProps) => {
  return (
    <div>
      <p>{item.id}</p>
      <p>{item.name}</p>
      <p>{item.type}</p>
    </div>
  )
}

export default Company;
