import { useDataContext } from './Provider'

const useUser = () => {
  const { storeUser, updateUser, resetUser } = useDataContext()
  const { email, name, authenticated } = storeUser

  return {
    email,
    name,
    authenticated,
    updateUser,
    resetUser,
  }
}

export default useUser
