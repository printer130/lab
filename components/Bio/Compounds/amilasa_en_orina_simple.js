import { Input } from '../Input'

export default function AmilasaEnOrina ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Amilasa en Orina</h2>
        <Input
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
