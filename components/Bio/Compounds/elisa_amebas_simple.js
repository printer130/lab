import { Input } from '../Input'

export default function ElisaAmebas ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Elisa Amebas</h2>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Elisa Amebas...'
          name='elisa_amebas_simple'
        />
      </section>
    </>
  )
}
