import { useContext } from 'react'
import { UserContext } from 'hooks/useUserContext'

export function ctxUser () {
  return useContext(UserContext)
}
