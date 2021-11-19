import { Button } from 'components'
import { onSignOut } from 'db/firebase/auth'
import { ctxUser } from 'hooks/ctxUser'
import Link from 'next/link'

export const Nav = () => {
  const { user, lab } = ctxUser()
  const handleButton = () => {
    onSignOut()
  }
  return (
    <>
      <nav>
        <div>logo</div>
        {
          user &&
            <>
              <div>
                {lab}
              </div>
              <div>
                {user.email}
              </div>
              <Link href='/arqueo'>
                <a>
                  Arqueo
                </a>
              </Link>
              <Link href='/registro'>
                <a>
                  Registro
                </a>
              </Link>
              <Button onChange={handleButton}>
                Cerrar Session
              </Button>
            </>
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
