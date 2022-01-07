import { useSession } from 'next-auth/react'
import Link from 'next/link'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'

export function Order ({
  itotal,
  date,
  id,
  fullname,
  total,
  acuenta,
  saldo,
  cu
}) {
  const session = useSession()
  const { role } = session?.data?.token?.user
  const handleDelete = () => {
    window
      .fetch(`/api/deleteReceipt/${cu}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => console.log('DELETED', data))
  }
  return (
    <>
      <div>
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>{id}</p>
        <p>{fullname}</p>
        <p>{total} </p>
        <p>{itotal}</p>
        <p>{total - itotal}</p>
        {role && role === ROLE_TYPE_BIOCHEMICAL && (
          <Link href={`/bio/${cu}`}>
            <a title='Bio' />
          </Link>
        )}
        <Link href={`/ordenes/${cu}`}>
          <a title='Editar' />
        </Link>
        <a
          download
          href={`/bio/${cu}`}
          filename={`${cu}.pdf`}
          title='Descargar en pdf'
        />
        <a onClick={handleDelete} title='Borrar' />
      </div>
      <style jsx>
        {`
          div:nth-child(2n + 2) {
            background-color: #d2f2ff;
          }
          div {
            border: ${total - itotal === 0
              ? '2px solid #008f00'
              : '2px solid transparent'};
            min-width: 320px;
            max-width: 100%;
            width: 100%;
            display: grid;
            align-self: center;
            align-items: center;
            grid-template-columns: 105px 145px 1fr repeat(3, 80px) ${role ===
              ROLE_TYPE_BIOCHEMICAL
                ? 'repeat(4, 35px)'
                : 'repeat(3, 35px)'};
          }
          p:nth-child(2) {
            width: 100%;
          }
          p:nth-child(3) {
            width: 100%;
          }
          a {
            width: 16px;
            height: 16px;
            background-size: contain;
            cursor: pointer;
          }

          a:nth-last-child(1) {
            background-image: url('/svg/cross.webp');
          }
          a:nth-last-child(2) {
            background-image: url('/svg/pdf2.webp');
          }
          a:nth-last-child(3) {
            background-image: url('/svg/edit.webp');
          }
          a:nth-last-child(4) {
            background-image: url('/miniLogo.svg');
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
    </>
  )
}
