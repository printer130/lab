import { LazyBio } from 'components/LazyBio'

const PDF_HEIGHT = 792

const Layout = ({ children, id, loading }) => {
  return (
    <section
      id={id}
      className='relative min-full mx-[auto] text-[12px]'
      style={{ width: 612, height: PDF_HEIGHT }}
    >
      <main className={`w-full h-full text-[8px] ${loading ? 'opacity-60 pointer-events-none' : ''} `}>{children}</main>
    </section>
  )
}

export const PDFComponent = ({ id, data, register, loading }) => {
  return (
    <Layout id={id} loading={loading}>
      <div className='px-4 flex flex-row flex-wrap'>
        {data.json.map((json, i) => {
          console.log('[JSON]: ', json, i)
          return (
            <LazyBio
              pdf
              key={json.name + String(i)}
              name={json.name}
              register={register}
              values={json.values}
            />
          )
        })}
      </div>
    </Layout>
  )
}
