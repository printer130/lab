import Link from 'next/link'

export const GoBack = ({ url }) => {
  return (
    <Link href={url}>
      <a>
        <img className='inline w-6 my-4' src='/svg/back.svg' />
      </a>
    </Link>
  )
}
