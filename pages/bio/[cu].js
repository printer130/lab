import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { prisma } from 'db/prisma'
import { getSession } from 'next-auth/react'
import { normalizedReceiptByCu } from 'utils/normalize/receiptByCu'
import { getAge } from 'hooks/dateTime/getAge'
import Link from 'next/link'
import { LazyBio } from 'components/LazyBio'
import { receiptBio } from 'lib/db/receiptBio'

 export default function Bio ({ receiptByCu = {} }) {
   const [loading, setLoading] = useState(false)
  
    // const { data } = useSWR(`/api/receipt/${cuiid}`)
   const {
     register,
     handleSubmit,
     formState: { errors }
   } = useForm()

    const onSubmit = data => {
      const culo = {
        json: receiptByCu.json,
        data,
        cuiid: receiptByCu.cuiid
      }
      receiptBio({ culo, onLoading: setLoading })
    }
    const handlePDF = () => {
      console.log('clic')
      return null
    }
   return (
     <>
       <section>
         <nav>
           <p>
             <span>
               Nombre: <strong>{receiptByCu?.owner?.fullName}</strong>
             </span>
             <span>
               Edad: <strong>{getAge(receiptByCu?.owner?.birth)}</strong>
             </span>
             <span>
               Sexo: <strong>{receiptByCu?.owner?.sex}</strong>
             </span>
           </p>
           <Link href='/ordenes'>
             <a className='atras'>Ir Atras</a>
           </Link>
         </nav>
         <form onSubmit={handleSubmit(onSubmit)}>
           {receiptByCu?.json?.length > 0 &&
             receiptByCu.json.map(({ name, values = null }) => {
               return (
                 <div key={name}>
                   <LazyBio name={name} values={values} register={register} />
                 </div>
               )
             })}
           <button>{loading ? 'Guardando...' : 'Guardar'}</button>
         </form>
         <a onClick={handlePDF} title='Descargar en pdf'>
           Descargar PDF
         </a>
       </section>
       <style jsx>
         {`
           div {
             max-width: 900px;
             margin: 0 auto;
           }

           nav {
             display: flex;
             justify-content: space-between;
           }
           p {
             display: flex;
             flex-direction: column;
           }
           .atras {
             display: block;
             width: 270px;
             background-color: #1a90c0;
             height: 28.4px;
             padding: 0.25rem 0.45rem;
             color: #eee;
             text-align: center;
             font-size: 1rem;
             border-radius: 7px;
           }

           button {
             pointer-events: ${loading ? 'none' : 'auto'};
             width: 100%;
             margin-top: 2rem;
             background-color: #1a90c0;
             opacity: ${loading ? '.55' : '1'};
             padding: 0.25rem 0.45rem;
             color: #eee;
             font-size: 1rem;
             cursor: pointer;
             border-radius: 7px;
             border: 1px solid #ddd;
           }
         `}
       </style>
     </>
   )
 }

 export async function getServerSideProps ({ req, query }) {
 const session = await getSession({ req })
  const { labId } = session.token.user

   const receiptFinded = await prisma[`receipt${labId}`].findUnique({
     where: {
       cuiid: query.cu
     },
     include: {
       owner: true
     }
   })
   console.log({ receiptFinded })

  return {
    props: {
      receiptByCu: normalizedReceiptByCu({ receiptFinded })
    }
  }
 }

// function ReceiptByCu () {
//   const router = useRouter()

//   return <h1>hola {JSON.stringify(router.query.cu)}</h1>
// }

// export default function Bio ({ fallback }) {
//   return <SWRConfig value={{ fallback }}>
//       <ReceiptByCu />
//    </SWRConfig>
// }

// export async function getServerSideProps ({ req, query}) {
//   const session = await getSession({ req })
//   const { labId } = session.token.user

//    const receiptFinded = await prisma[`receipt${labId}`].findUnique({
//      where: {
//        cuiid: query.cu
//      },
//      include: {
//        owner: true
//      }
//    })

//   return {
//     props: {
//         receipt: normalizedReceiptByCu({ receiptFinded })
//     }
//   }
// }