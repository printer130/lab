import { Input } from '../Input'

export default function NaEnOrina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Na en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Na en Orina'
          name='na_en_orina_simple'
        />
      </section>
    </>
  )
}
