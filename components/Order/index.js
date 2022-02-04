import { useSession } from 'next-auth/react'
import Link from 'next/link'

const ROLE_TYPE_BIOCHEMICAL = 'BIOCHEMICAL'

export function Order ({
  itotal,
  date,
  onPDF,
  id,
  fullname,
  total,
  acuenta,
  onDelete,
  saldo,
  cuiid
}) {
  const session = useSession()
  const { role } = session?.data?.token?.user

  const diff = total - itotal

  return (
    <>
      <div>
        <p>{new Date(date).toLocaleDateString()}</p>
        <p>{id}</p>
        <p>{fullname}</p>
        <p>{total} </p>
        <p>{itotal}</p>
        <p>{diff <= 0 ? '✅' : diff}</p>
        {role && role === ROLE_TYPE_BIOCHEMICAL && (
          <Link href={`/bio/${cuiid}`}>
            <a title='Bio' />
          </Link>
        )}
        <Link href={`/ordenes/${cuiid}`}>
          <a title='Editar' />
        </Link>
        <button onClick={() => onPDF({ cuiid })} title='Descargar en pdf' />
        <a onClick={() => onDelete({ cuiid, fullname })} title='Borrar' />
      </div>
      <style jsx>
        {`
          div:nth-child(2n + 2) {
            background-color: #d2f2ff;
          }
          div {
            height: auto;
            min-height: 55px;
            border: 2px solid transparent;
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
            background-image: url('/svg/delete.svg');
          }
          button {
            width: 16px;
            height: 16px;
            background-size: contain;
            cursor: pointer;
            background-image: url('/svg/pdf2.webp');
          }
          a:nth-last-child(3) {
            background-image: url('/svg/edit.svg');
          }
          a:nth-last-child(4) {
            background-image: url('/miniLogo.svg');
            background-position: center;
            background-repeat: no-repeat;
          }
          @media (max-width: 600px) {
            div {
              grid-template-columns: 105px 145px 1fr repeat(3, 80px) ${role ===
                ROLE_TYPE_BIOCHEMICAL
                  ? 'repeat(4, 35px)'
                  : 'repeat(3, 35px)'};
            }
          }
        `}
      </style>
    </>
  )
}
