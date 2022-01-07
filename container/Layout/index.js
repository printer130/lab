import { useRouter } from 'next/router'
export function Layout ({ children }) {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <>
      <main>
        {children}
      </main>
      <style jsx>{`
            main {
              padding:${pathname === '/' || pathname === undefined ? '0' : '55px 1rem'};
              max-width: ${pathname === '/' || pathname === undefined ? 'inherit' : '900px'};
              margin: ${pathname === '/' || pathname === undefined ? 'inherit' : '30px auto 200px'};
            }
        `}
      </style>
    </>
  )
}
