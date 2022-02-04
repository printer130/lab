import { LazyBio } from 'components/LazyBio'
import { getAge } from 'hooks/dateTime/getAge'
import { unique } from 'utils/unique'

function Layout ({ children, id }) {
  return (
    <section
      id={id}
      className='relative min-full'
      style={{ width: 867, height: '100%' }}
    >
      <main className='w-full h-full'>{children}</main>
    </section>
  )
}
function Footer () {
  return (
    <div
      id='footer'
      className='flex mt-4 flex-col text-center justify-center h-60  text-[#e1f3ef]  w-full bg-[#0d1117]'
    >
      <div className='flex self-center items-center  text-center justify-aroud'>
        <p className='mr-4'>c. Urpila S/N Frente al Hospital del Nortes</p>
        <p> 72730216 - 68518882</p>
      </div>
      <div>
        <p className=''>Cochabamba - Bolivia</p>
      </div>
    </div>
  )
}

function Header ({ data }) {
  return (
    <div id='header' className='flex justify-between items-center p-4'>
      <img className='w-64' src='lab_valencia.png' />
      <div className='flex flex-col'>
        <p className='flex'>
          <span className='w-[68px] min-w-[68px]'>Paciente: </span>
          <strong>{data.owner.fullName}</strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Edad: </span>
          <strong>{getAge(data.owner.birth)}</strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Género: </span>
          <strong>
            {data.owner.male === 'male' ? 'Masculino' : 'Femenino'}
          </strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Médico: </span>
          <strong>{data.owner.doctor}</strong>
        </p>
      </div>
      <div className='flex flex-col ml-4'>
        <p className='flex'>
          <span className='w-44'>Codigo: </span>
          <strong>
            {unique({
              labName: data.labName,
              ownerCi: data.owner.ci,
              cuiid: data.cuiid,
              id: data.owner.id
            })}
          </strong>
        </p>
        <p className='flex'>
          <span className='w-44'>Fecha toma de muestra: </span>
          <strong>{data.createdAt.slice(0, 10)} </strong>
        </p>
        <p className='flex'>
          <span className='w-44'>Fecha de impresión: </span>
          <strong>{new Date().toLocaleDateString().split('/').reverse().join('-')}</strong>
        </p>
        <p className='flex'>
          <span className='w-44'>Institución: </span>
          <strong />
        </p>
      </div>
    </div>
  )
}

export const PDFComponent = ({ id, data, register }) => {
  console.log('DATA-[PDF]', data)
  return (
    <Layout id={id}>
      <Header data={data} />
      <div className='px-4 flex flex-row flex-wrap'>
        {data.json.map(json => {
          return (
            <LazyBio
              key={json.name}
              name={json.name}
              register={register}
              values={json.values}
            />
          )
        })}
      </div>
      <Footer />
    </Layout>
  )
}
