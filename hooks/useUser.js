import { useState, useEffect } from 'react'
import { onAuthStateChange } from 'db/firebase/auth'
import { useRouter } from 'next/router'
import { USER_STATES } from 'const/user_states'

export const useUser = () => {
  const [user, setUser] = useState(USER_STATES.NOT_KNOW)
  const router = useRouter()

  useEffect(() => {
    const u = onAuthStateChange(setUser)
    return () => u()
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push('/')
  }, [user])
  return {
    user
  }
}
