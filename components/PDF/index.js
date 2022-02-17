import { LazyBio } from 'components/LazyBio'

const PDF_HEIGHT = 792

const Layout = ({ children, id }) => {
  return (
    <section
      id={id}
      className='relative min-full mx-[auto] text-[12px]'
      style={{ width: 612, height: PDF_HEIGHT }}
    >
      <main className='w-full h-full'>{children}</main>
    </section>
  )
}

export const PDFComponent = ({ id, data, register }) => {
  return (
    <Layout id={id}>
      <div className='px-4 flex flex-row flex-wrap text-xs'>
        {data.json.map(json => {
          return (
            <LazyBio
              pdf
              key={json.name}
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
