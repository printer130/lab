/* eslint-disable react/jsx-closing-tag-location */
import { useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Button } from 'components'
import Link from 'next/link'
import { SIGN_OUT } from 'const/config'
import { Logo } from 'components/Logo'
import { useRouter } from 'next/router'

export const Nav = () => {
  const [checked, setChecked] = useState(false)
  const session = useSession()
  const { replace } = useRouter()

  // console.log('{session}', session)
  //  console.log('[ROLE]: ', session?.data?.user?.role)

  const handleButton = () => {
    signOut({
      redirect: false,
      callbackUrl: `${SIGN_OUT}`
    }).then(data => replace(data.url))
  }
  const handleClic = () => {
    setChecked(!checked)
  }

  console.log('session?.data?.user?.role', session)
  return (
    <>
      <input
        onChange={handleClic}
        checked={checked}
        type='checkbox'
        id='open'
        className='menu-checkbox'
      />
      <header className='header'>
        <Logo white='#fff' blue='#1A90C0' innerB='#252525' a='#fff' />
        {session.data !== null && (
          <>
            <small>{session.data?.token?.email}</small>
            <div className='header-content'>
              <label htmlFor='open' className='menu-open' />
              <nav className='menu'>
                {
                  session?.data?.token?.user?.role === 'BIOCHEMICAL'
                    ? <></>
                    : (
                      <Link href='/arqueo'>
                        <a onClick={handleClic}>Arqueo</a>
                      </Link>
                      )
                }
                <Link href='/registro'>
                  <a onClick={handleClic}>Registro</a>
                </Link>
                <Link href='/ordenes'>
                  <a onClick={handleClic}>Lista de Ordenes</a>
                </Link>
                {
                  // session?.data?.token?.user.role
                  session?.data?.token?.user?.role === 'RECEPTIONIST' | session?.data?.token?.user?.role === 'ADMIN'
                    ? <></>
                    : (
                      <Link href='/reactivos'>
                        <a onClick={handleClic}>Reactivos</a>
                      </Link>
                      )
                }
                <Button onChange={handleButton}>Cerrar Session</Button>
              </nav>
            </div>
          </>
        )}
      </header>
      <style jsx>
        {`
          input {
            display: none;
          }
          .header {
            position: fixed;
            display: flex;
            top: 0;
            width: 100%;
            z-index: 99;
            background-color: #252525;
            color: #d2f2ff;
            font-size: 1.2rem;
            height: 49px;
            padding: 0 1rem;
            align-items: center;
            justify-content: space-between;
          }
          img {
            width: 80px;
          }
          a {
            color: #fff;
            outline: 0.2px solid #eee;
            padding: 0.25rem 0.5rem;
            margin: 1rem 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: start;
            padding-left: 50px;
            background-repeat: no-repeat;
            background-position: left;
            background-size: contain;
          }
          a:hover {
            background-color: #101010;
          }
          a:nth-child(1) {
            background-image: url('/dolar.webp');
          }
          a:nth-child(2) {
            background-image: url('/register.webp');
          }
          a:nth-child(3) {
            background-image: url('/list.webp');
          }
          a:nth-child(4) {
            background-image: url('/react.webp');
          }
          .menu {
            display: flex;
            flex-direction: column;
            padding: 16px;
            letter-spacing: 0.6px;
            font-size: 1.6rem;
            visibility: hidden;
            position: absolute;
            opacity: 0;
            left: 0;
            right: 0;
            top: 100%;
            background: #171717;
            height: 100vh;
            transform: translateY(-50px);
            transition: 0.3s transform, 0.3s opacity;
            will-change: transform;
          }
          .menu-open {
            user-select: none;
            width: 50px;
            height: 50px;
            align-items: center;
            display: inline-flex;
            justify-content: center;
            background-image: url('/icon-hamburger.svg');
            background-repeat: no-repeat;
            background-position: center;
            cursor: pointer;
          }

          .menu-checkbox:checked ~ .header .menu {
            transform: translateY(0);
            visibility: visible;
            opacity: 1;
          }

          .menu-checkbox:checked ~ .header .header-content {
            background: url('/icon-close.svg');
            background-repeat: no-repeat;
            background-position: center;
          }
          .menu-checkbox:checked ~ .header .header-content .menu-open {
            background: none;
          }

          @media screen and (min-width: 789px) {
            .mnu {
              transform: translateY(0);
              position: initial;
              height: auto;
              background: initial;
            }
            .mnu-open {
              visibility: visible;
              opacity: 1;
              display: none;
            }
          }
        `}
      </style>
    </>
  )
}
