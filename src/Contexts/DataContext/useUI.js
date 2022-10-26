import { useDataContext } from './Provider'

const useUI = () => {
  const { showSplash, showMenu, setShowMenu, setShowSplash } = useDataContext()

  return {
    showSplash,
    showMenu,
    setShowSplash,
    setShowMenu,
  }
}

export default useUI
