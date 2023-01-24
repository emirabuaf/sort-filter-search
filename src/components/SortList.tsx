import Button from "./Button";


interface SortListProps {
  handleButtonClick: () => void;
  sortOrder: string;
}

const SortList = ({ sortOrder, handleButtonClick }: SortListProps) => {
  return (
    <Button onClick={handleButtonClick} value={`Click for ${sortOrder}`} />
  )
}

export default SortList;