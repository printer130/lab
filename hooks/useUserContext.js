import { createContext } from 'react'
import { useUser } from './useUser'
import { USER_STATES } from 'const/user_states'

export const UserContext = createContext()

function UserProvider ({ children }) {
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

export default {
  UserProvider,
  UserConsumer: UserContext.Consumer
}
