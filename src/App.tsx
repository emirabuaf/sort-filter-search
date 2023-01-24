import { useEffect, useMemo } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';

import { useState } from 'react';
import CompanyList from './components/CompanyList';
import Search from './components/Search';
import SortList from './components/SortList';
import SelectComponent from './components/SelectComponent';

export interface CompanyData {
  name: string;
  id: number;
  type: string;
  created_at: string;
}

const theme = {
  mobile: '768px'
}

function App() {
  const [list, setList] = useState<CompanyData[]>([])
  const [value, setValue] = useState<string>('')
  const [sortOrder, setSortOrder] = useState("ascending");
  const [filter, setFilter] = useState<string>("")


  const handleButtonClick = () => {
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/capcito/frontend-ws/companies')
      .then((res) => res.json())
      .then(data => {
        setList(data?.sort((a: CompanyData, b: CompanyData) => (a.id > b.id ? 1 : -1)))

      })
  }, [])

  const filteredSortedList = useMemo(
    () => [...list].filter((item: CompanyData) =>
      item.name.toLowerCase().includes(value.toLowerCase()) && item.type.toLowerCase().includes(filter.toLowerCase()))
      .sort((a: CompanyData, b: CompanyData) => sortOrder === "ascending" ? b.id - a.id : a.id - b.id)
    , [value, filter, list, sortOrder]
  )

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Search value={value} setValue={setValue} />
      <SelectComponent filter={filter} setFilter={setFilter} />
      <SortList sortOrder={sortOrder} handleButtonClick={handleButtonClick} />
      <CompanyList list={filteredSortedList} />
    </ThemeProvider>
  );
}

export default App;
