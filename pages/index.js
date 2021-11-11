import { useContext, useEffect } from 'react'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { useRouter } from 'next/router'
import { LoginCredential } from 'container/LoginCredential'
import { UserContext } from 'hooks/useUserContext'

export default function Home () {
  const { user, loading } = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    user && router.push('/registro')
  }, [user])
  return (
    <div className={styles.container}>
      <Head>
        <title>Farmacias</title>
        <meta name='description' content='Para laboratorios y pacientes con recetas|orden' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LoginCredential />

    </div>
  )
}
