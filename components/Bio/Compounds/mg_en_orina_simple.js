import { Input } from '../Input'

export default function MgEnOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Mg en Orina</h2>
        <Input
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
