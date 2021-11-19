import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LoginCredential } from 'container/LoginCredential'
import { ctxUser } from 'hooks/ctxUser'

export default function Home () {
  const { user } = ctxUser()
  const router = useRouter()

  useEffect(() => {
    user && router.push('/registro')
  }, [user])

  return (
    <>
      <Head>
        <title>Laboratorio</title>
        <meta name='description' content='Para laboratorios y pacientes con recetas|orden' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LoginCredential />
    </>
  )
}
