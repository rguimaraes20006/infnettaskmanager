import { DateTime } from 'luxon'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useTasks from '../../Contexts/DataContext/useTasks'
import * as S from './Style'

const Task = () => {
  const navigate = useNavigate()
  const { categories, storeTasks, updateTasks } = useTasks()
  const [category, setCategory] = useState('Pessoal')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const save = () => {
    if (!title || !date) return
    const taskDate = DateTime.fromISO(`${date}:00-03`)
    updateTasks([...storeTasks, { title, category, date: taskDate.toUTC().toString() }])
    setCategory('Pessoal')
    setTitle('')
    setDate('')
  }

  return (
    <S.Container>
      <S.Title>Adicionar Tarefa</S.Title>
      <S.Row>
        <S.Input
          disableUnderline={true}
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          placeholder="Título"
        />
      </S.Row>
      <S.Row>
        <S.Input
          type="datetime-local"
          disableUnderline={true}
          value={date}
          onChange={(ev) => setDate(ev.target.value)}
          placeholder="Data"
        />
      </S.Row>
      <S.CategoriesLabel>Categorias</S.CategoriesLabel>
      {categories.map(({ name, bg }, idx) => (
        <S.Category onClick={() => setCategory(name)} key={idx}>
          <S.CategoryMarker bg={bg} selected={name === category} />
          {name}
        </S.Category>
      ))}
      <S.Row>
        <S.Button onClick={save}>Salvar</S.Button>
        <S.Button onClick={() => navigate('/dashboard')}>Voltar</S.Button>
      </S.Row>
    </S.Container>
  )
}

export default Task
