/* eslint-disable react/jsx-indent */
import { Loading } from 'components/Loading'
import { USER_STATES } from 'const/user_states'
import { ctxUser } from 'hooks/ctxUser'

export const Profile = () => {
  const { user } = ctxUser()
  return (
    <>
      {
        user !== USER_STATES.NOT_KNOW
          ? <div>
            <h2>{user?.email}</h2>
            </div>
          : <Loading />
      }
    </>
  )
}
