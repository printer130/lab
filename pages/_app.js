import 'styles/globals.css'
import Context from 'hooks/useUserContext'
import { Layout } from 'container/Layout'
import { Nav } from 'components'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Context.UserProvider>
        <Nav />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Context.UserProvider>
    </>
  )
}

export default MyApp
