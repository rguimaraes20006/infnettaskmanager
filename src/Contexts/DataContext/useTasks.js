import { orderBy } from 'lodash'
import { DateTime } from 'luxon'
import { useMemo } from 'react'
import { useDataContext } from './Provider'

const useTasks = () => {
  const { storeTasks, search, updateTasks, resetTasks, setSearch } = useDataContext()
  const categories = [
    { name: 'Pessoal', bg: '#C7E7E9E5' },
    { name: 'Profissional', bg: '#E0E34D' },
    { name: 'Outros', bg: '#57A050E5' },
  ]
  const tasks = useMemo(() => {
    const today = DateTime.utc()
    const days = [
      { label: 'Ontem', add: -1, tasks: [] },
      { label: 'Hoje', add: 0, tasks: [] },
      { label: 'Amanhã', add: 1, tasks: [] },
    ]
    return days.map(({ label, add }) => {
      const tasks = orderBy(
        storeTasks.filter(
          ({ date }) =>
            DateTime.fromISO(date).toISODate() === today.plus({ days: add }).toISODate(),
        ),
        'date',
      )
      return { label, add, tasks }
    })
  }, [storeTasks])
  const filtered = useMemo(
    () =>
      tasks
        .map((task) => {
          return {
            ...task,
            tasks: task.tasks.filter(({ category, date, title }) => {
              if (search) {
                const taskDate = DateTime.fromFormat(search, 'dd/MM/yyyy')
                if (taskDate.isValid && taskDate.toISODate() === DateTime.fromISO(date).toISODate())
                  return true
              }
              if (
                category
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .indexOf(
                    search
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, ''),
                  ) > -1
              )
                return true
              if (
                title
                  .toLowerCase()
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .indexOf(
                    search
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, ''),
                  ) > -1
              )
                return true
              return false
            }),
          }
        })
        .filter(({ tasks }) => !!tasks.length),
    [search, tasks],
  )

  return {
    storeTasks,
    tasks,
    categories,
    search,
    filtered,
    updateTasks,
    resetTasks,
    setSearch,
  }
}

export default useTasks
