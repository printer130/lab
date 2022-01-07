import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { SIGN_OUT } from 'const/config'
import { onAuthStateChanged } from '@firebase/auth'
import { onAuthStateChange } from 'db/firebase/auth'
import { USER_STATES } from 'const/user_states'

export const useUser = () => {
  const router = useRouter()
  const session = useSession()
  // const [user, setUser] = useState(null)
  // session.data
  // session.status
  // session.data.user
  // session.data.token.user

  // console.log('[FRONTEND]: ', session?.data)

  useEffect(() => {
    !session?.data?.token?.user && router.push(`${SIGN_OUT}`)
  }, [session])

  // useEffect(() => {
  //   !user && router.push(`${SIGN_OUT}`)
  // }, [user])

  // useEffect(() => {
  //   const u = onAuthStateChange(setUser)
  //   return () => u()
  // }, [])

  // return {
  //   user: session.data?.token?.user,
  //   status: session?.status
  // }
  return { session }
}
