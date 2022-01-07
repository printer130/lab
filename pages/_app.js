/* eslint-disable react/jsx-indent */
import 'styles/globals.css'
import { UserProvider } from 'hooks/useUserContext'
import { Layout } from 'container/Layout'
import { SessionProvider, useSession } from 'next-auth/react'
import { Nav } from '../components/index'
import { useRouter } from 'next/router'
import Index from 'pages/index'

import ErrorBoundary from 'errorBoundary'

function MyApp ({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <SessionProvider session={pageProps.session}>
        <UserProvider>
          <Nav />
          <Layout>
            <Component {...pageProps} />
            {/* <Auth>
              {Component.auth === true ? (
              ) : (
                <Index />
              )}
            </Auth> */}
          </Layout>
        </UserProvider>
      </SessionProvider>
    </ErrorBoundary>
  )
}

// function Auth ({ children }) {
//   const router = useRouter()
//   const { data: session, status } = useSession()
//   const isUser = !!session?.user

//   useEffect(() => {
//     status === 'loading' && <h1>loading</h1>
//     status === 'unauthenticated' && router.push('/')
//   }, [isUser, status])

//   // if (isUser) { return children }
//   return children
// }

function Auth ({ children }) {
  // const router = useRouter()
  // const session = useSession()
  // const { user } = useUser()
  // const isUser = !!session

  // useEffect(() => {
  //   !session?.data && router.push('/')
  // }, [isUser, session.data])

  // if (isUser) { return children }
  return children
}

export default MyApp
