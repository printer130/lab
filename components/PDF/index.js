
export const PDFComponent = ({ id }) => {
  return (
    <section id={id} className='relative' style={{ width: 595, height: 842 }}>
      <main className='w-full h-full'>
        <div>
          <h1 className='text-red-200 text-xs'>Arqueo</h1>
        </div>
        <div>
          <h2 style={{ color: '#000' }}>{new Date().toLocaleDateString()}</h2>
          <div className='flex flex-col border mx-4'>
            <strong>50</strong>
            <strong>100</strong>
            <strong>150</strong>
            <input readOnly value='HOLA' />
          </div>
        </div>
        <img src='/pege.jpeg' alt='pege' />
        <div id='footer' className='flex flex-col text-center justify-center h-72 bg-zinc-800 text-blue-300 absolute w-full bottom-0'>
          <div className='flex self-center items-center  text-center justify-aroud'>
            <p className='mr-4'>c. Urpila S/N Frente al Hospital del Nortes</p>
            <p> 72730216 - 68518882</p>
          </div>
          <div>
            <p>Cochabamba - Bolivia</p>
          </div>
        </div>
      </main>
    </section>
  )
}
