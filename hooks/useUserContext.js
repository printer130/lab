// import { USER_STATES } from 'const/user_states'
import { createContext } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export const UserContext = createContext()

export function UserProvider ({ children }) {
  const session = useSession()

  const value = {
    user: session
  }

  // useEffect(() => {
  //   user === USER_STATES.NOT_LOGGED && router.replace('/')
  // }, [user])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
