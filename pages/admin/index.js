import { useSession } from 'next-auth/react'

export default function Admin () {
  const { data: session, status } = useSession()
  // session is always non-null inside this page, all the way down the React tree.
  return (
    <section>
      {
  status === 'authenticated' && <>
    <h1>Admin</h1>
    <p>
      You are logged in as {session?.user?.email}
    </p>
  </>
      }
      <style jsx>{`
        section {
          margin-top: 50px;
        }
      `}
      </style>
    </section>
  )
}

Admin.auth = true
