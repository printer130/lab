import { ListOfAnalisys } from 'components/ListOfAnalisys'
import jsonData from 'const/data.json'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

export function DinamicDicc ({ labId }) {
  const DinamicList = dynamic(() => import(`/const/${labId}.json`), {
    ssr: false,
    suspense: false
  })

  return (
    <Suspense fallback='Cargando...'>
      <DinamicList />
    </Suspense>
  )
}

export const DicList = ({ onChange }) => {
  const session = useSession()
  return (
    <>
      {/* <DinamicDicc labId='data' /> */}
      <strong className='mx-auto text-2xl'>
        Lista de análisis y laboratorio
      </strong>
      <section className='mt-8'>
        {jsonData.map(({ title, list }) => {
          return (
            <ListOfAnalisys
              key={title}
              onChange={onChange}
              list={list}
              title={title}
            />
          )
        })}
      </section>
      <style jsx>
        {`
          section {
            columns: 5 270px;
            column-gap: 0.5rem;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </>
  )
}
