import { CompanyData } from '../App'
import Company from './Company';

interface CompanyListProps {
  list: CompanyData[]
}

const CompanyList = ({ list }: CompanyListProps) => {
  return (
    <div>
      {list.map((item) => (
        <Company key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CompanyList;