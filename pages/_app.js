import 'styles/globals.css'
import { UserProvider } from 'hooks/useUserContext'
import { Layout } from 'container/Layout'
import { Nav } from 'components'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  )
}

export default MyApp
