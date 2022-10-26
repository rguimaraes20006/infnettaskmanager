import { DateTime } from 'luxon'
import React, { Fragment } from 'react'
import useTasks from '../../Contexts/DataContext/useTasks'
import * as S from './Style'

const Tasks = () => {
  const { storeTasks, filtered: tasks, updateTasks } = useTasks()
  const updateTask = (id) => {
    updateTasks(
      storeTasks.map((task) => {
        if (task.id !== id) return { ...task }
        return { ...task, status: 'completed' }
      }),
    )
  }

  return (
    <S.Container>
      {tasks.map(({ label, tasks: dayTasks }, idx) => (
        <Fragment key={idx}>
          <S.TaskDate>
            <S.Date>{label}</S.Date>
          </S.TaskDate>
          {dayTasks.map(({ id, category, date, title, status }, tIdx) => (
            <S.Task bg={category} onClick={() => updateTask(id)} key={tIdx}>
              {DateTime.fromISO(date).toLocaleString(DateTime.TIME_SIMPLE)} - {title}
              <S.TaskStatus status={status} />
            </S.Task>
          ))}
        </Fragment>
      ))}
    </S.Container>
  )
}

export default Tasks
