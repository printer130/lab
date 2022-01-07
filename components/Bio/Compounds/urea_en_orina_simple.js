import { Input } from '../Input'

export default function UreaEnOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Urea en Orina</h2>
        <Input
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
