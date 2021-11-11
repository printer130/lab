import { createContext } from 'react'
import { useUser } from './useUser'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const { user } = useUser()

  const value = {
    user
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
