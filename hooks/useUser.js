import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { SIGN_OUT } from 'const/config'

export const useUser = () => {
  const router = useRouter()
  const session = useSession()

  useEffect(() => {
    !session?.data?.token?.user && router.push(`${SIGN_OUT}`)
  }, [session])
  return { session }
}
