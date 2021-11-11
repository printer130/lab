import Link from 'next/link'

export const Anchor = ({ children }) => {
  return (
    <Link href='/registro'>
      <a>
        {children}
      </a>
    </Link>
  )
}
