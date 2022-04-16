
const Layout = ({ children, id, loading }) => {
  return (
    <section
      id={id}
      className='relative min-full mx-[auto]'
      style={{ width: 612, height: 'fit-content' }}
    >
      <main className={`w-full h-full text-sm ${loading ? 'opacity-60 pointer-events-none' : ''} `}>{children}</main>
    </section>
  )
}

export const PDFComponent = ({ id, data, register, loading, pdf }) => {
  return (
    <Layout id={id} loading={loading}>
      <div className='px-4 flex flex-row flex-wrap'>
        {/* {data.json.map((json, i) => {
          return (
            <LazyBio
              sex={data?.owner?.sex}
              pdf={pdf}
              key={json.name + String(i)}
              name={json.name}
              reagents
              register={register}
              values={json.values}
            />
          )
        })} */}
      </div>
    </Layout>
  )
}
