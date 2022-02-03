function Layout ({ children, id }) {
  return (
    <section
      id={id}
      className='relative min-full'
      style={{ width: 867, height: 1023 }}
    >
      <main className='w-full h-full'>{children}</main>
    </section>
  )
}
function Footer () {
  return (
    <div
      id='footer'
      className='flex flex-col text-center justify-center h-60  text-[#e1f3ef] absolute w-full bottom-0 bg-[#0d1117]'
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

function Header () {
  return (
    <div id='header' className='flex justify-between items-center p-4'>
      <img className='w-64' src='lab_valencia.png' />
      <div className='flex flex-col'>
        <p className='flex'>
          <span className='w-[68px] min-w-[68px]'>Paciente: </span><strong>Mauricio Edwin Avilez Fernandez</strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Edad: </span><strong>48 AÑOS</strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Género: </span><strong>Masculino</strong>
        </p>
        <p className='flex'>
          <span className='w-[68px]'>Médico: </span><strong>DRA. Ruiz</strong>
        </p>
      </div>
      <div className='flex flex-col ml-4'>
        <p className='flex'><span className='w-44'>Codigo: </span><strong>1283518235</strong> </p>
        <p className='flex'><span className='w-44'>Fecha toma de muestra: </span><strong>29/2/2022</strong> </p>
        <p className='flex'><span className='w-44'>Fecha de impresión: </span><strong>29/2/2022</strong></p>
        <p className='flex'><span className='w-44'>Institución: </span><strong /></p>
      </div>
    </div>
  )
}

export const PDFComponent = ({ id }) => {
  return (
    <Layout id={id}>
      <Header />
      <div className='px-4'>
        <h2 style={{ color: '#000' }}>Title: {new Date().toLocaleDateString()}</h2>
        <div className='flex flex-col border mx-4 text-slate-800'>
          <strong>50</strong>
          <strong>100</strong>
          <strong>150</strong>
          <input readOnly value='HOLA' />
        </div>
      </div>
      <Footer />
    </Layout>
  )
}
