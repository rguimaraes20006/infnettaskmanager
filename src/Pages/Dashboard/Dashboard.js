import React from 'react'
import Tasks from '../../Components/Tasks'
import useTasks from '../../Contexts/DataContext/useTasks'
import * as S from './Style'

const Dashboard = () => {
  const { search, setSearch } = useTasks()

  return (
    <S.Container>
      <S.Search>
        <S.Input
          type="search"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          startAdornment={
            <S.InputAdornment position="start">
              <S.SearchIcon />
            </S.InputAdornment>
          }
          disableUnderline={true}
          placeholder="Pesquisar..."
        />
      </S.Search>
      <Tasks />
    </S.Container>
  )
}

export default Dashboard
