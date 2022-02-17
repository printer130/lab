import { Input } from '../Input'

export default function UreaEnOrina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Urea en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Urea en Orina....'
          name='urea_en_orina_simple'
        />
      </section>
    </>
  )
}
