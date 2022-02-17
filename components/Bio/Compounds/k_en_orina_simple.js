import { Input } from '../Input'

export default function KEnOrina ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>K en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='K en Orina'
          name='k_en_orina_simple'
        />
      </section>
    </>
  )
}
