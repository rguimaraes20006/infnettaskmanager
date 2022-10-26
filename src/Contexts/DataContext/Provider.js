import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import {
  updateUser as updateUserAction,
  resetUser as resetUserAction,
} from '../../Store/Slices/UserSlice'
import {
  updateTasks as updateTasksAction,
  resetTasks as resetTasksAction,
} from '../../Store/Slices/TasksSlice'
import { mockTasks } from '../../Utils/mock'

const DataContext = createContext(undefined)
const useDataContext = () => {
  const context = useContext(DataContext)
  if (!context) throw new Error('useDataContext must be used within a DataProvider')
  return context
}
const DataProvider = (props) => {
  const dispatch = useDispatch()
  const storeUser = useSelector((state) => state.user)
  const storeTasks = useSelector((state) => state.tasks)
  const [showSplash, setShowSplash] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [search, setSearch] = useState('')
  const updateUser = (value) => dispatch(updateUserAction(value))
  const resetUser = () => dispatch(resetUserAction())
  const updateTasks = (value) => dispatch(updateTasksAction(value))
  const resetTasks = () => dispatch(resetTasksAction())
  const DataContextValue = useMemo(
    () => ({
      storeUser,
      storeTasks,
      showSplash,
      showMenu,
      search,
      updateUser,
      resetUser,
      updateTasks,
      resetTasks,
      setShowSplash,
      setShowMenu,
      setSearch,
    }),
    [storeUser, storeTasks, showSplash, showMenu, search],
  )

  useEffect(() => {
    if (!storeUser.authenticated || storeTasks.length) return
    updateTasks([...mockTasks])
  }, [storeUser])

  return (
    <DataContext.Provider value={DataContextValue} {...props}>
      {props.children}
    </DataContext.Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.any,
}

export { DataProvider, useDataContext }
