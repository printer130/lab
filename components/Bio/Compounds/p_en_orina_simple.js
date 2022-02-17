import { Input } from '../Input'

export default function PEnOrina ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>P en Orina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='P en Orina....'
          name='p_en_orina_simple'
        />
      </section>
    </>
  )
}
