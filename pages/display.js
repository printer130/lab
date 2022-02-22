import { OrderProfile } from 'components/OrderProfile'
import { PDFComponent } from 'components/PDF'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { GeneratePDF } from 'utils/pdf'

// ckzvjkbdv01239eknn0io59l1

function register (name, options) {
  const onChange = function (e) {}
  return { name, onChange, ...options }
}

const cuiid = 'ckzvjkbdv01239eknn0io59l1'

export default function Display () {
  const { data, error, isValidating } = useSWR('/api/receipt/getOne/' + cuiid)
  const session = useSession()

  const handleClic = () => {
    toast.success('PDF generado.')
    GeneratePDF({ id: 'pdf', data: data?.data[0], lab: session?.data?.token.user.lab })
  }

  console.log('[data]', data?.data[0])
  console.log('[session]', session?.data?.token.user.lab)

  // <OrderProfile
  //  fullName
  //  total
  //  birth
  //  onIndebtChangee
  //  ci
  //  indebt
  // > */
  console.log('[error]', error)
  console.log('[isValidating]', isValidating)

  return (
    <>
      <div>
        {
          !data | session
            ? <div>Recuperando Información</div>
            : <>
              <button onClick={handleClic}>DESCARGAR!</button>
              <PDFComponent pdf id='pdf' data={data?.data[0]} register={register} lab={session?.data?.token.user.lab} />
            </>
        }
      </div>
      <style jsx>{`
      a , div{
        margin-top: 100px;
      }
      a {
        width: 50px;
        border: 1px solid black;
        height: 50px;
      }
    `}
      </style>
    </>
  )
}
