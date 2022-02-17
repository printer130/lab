import { Input } from '../Input'

export default function MgEnOrina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Mg en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Mg en Orina....'
          name='mg_en_orina_simple'
        />
      </section>
    </>
  )
}
