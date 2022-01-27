/* eslint-disable react/jsx-indent */
import { UserProvider } from 'hooks/useUserContext'
import { Layout } from 'container/Layout'
import { SessionProvider } from 'next-auth/react'
import { Nav } from '../components/index'
import { fetcher } from 'lib/fetcher'
import 'styles/globals.css'

import ErrorBoundary from 'errorBoundary'
import { SWRConfig } from 'swr'

export default function MyApp ({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <SWRConfig
        value={{
          fetcher,
          dedupingInterval: true,
          refreshInterval: false,
          revalidateOnFocus: false,
          focusThrottleInterval: 1000
        }}
      >
        <SessionProvider session={pageProps.session}>
          <UserProvider>
            <Nav />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </UserProvider>
        </SessionProvider>
      </SWRConfig>
    </ErrorBoundary>
  )
}
