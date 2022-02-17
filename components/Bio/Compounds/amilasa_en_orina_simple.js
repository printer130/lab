import { Input } from '../Input'

export default function AmilasaEnOrina ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Amilasa en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Amilasa en orina....'
          name='amilasa_en_orina_simple'
        />
      </section>
    </>
  )
}
