import { Input } from '../Input'

export default function PEnOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>P en Orina</h2>
        <Input
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
