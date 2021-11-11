import { useContext } from 'react'
import { UserContext } from 'hooks/useUserContext'
import { Button } from 'components'
import { onSignOut } from 'db/firebase/auth'

export const Nav = () => {
  const user = useContext(UserContext)

  const handleButton = () => {
    onSignOut()
  }
  return (
    <>
      <nav>
        <div>logo</div>
        {
          user &&
            <Button onChange={handleButton}>
              Cerrar Session
            </Button>
          }
      </nav>
      <style jsx>{`
      nav {
        display: flex;
        margin: 1rem;
        justify-content: space-between;
      }
    `}
      </style>
    </>
  )
}
