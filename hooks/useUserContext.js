import { USER_STATES } from 'const/user_states'
import { createContext, useEffect, useState } from 'react'
import { useUser } from './useUser'
import { useRouter } from 'next/router'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const { user } = useUser()
  const [lab, setLab] = useState()
  const router = useRouter()

  const value = {
    user,
    onLab: setLab,
    lab
  }

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.replace('/')
  }, [user])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
