import { Input } from '../Input'

export default function NaEnOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Na en Orina</h2>
        <Input
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
