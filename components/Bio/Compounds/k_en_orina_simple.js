import { Input } from '../Input'

export default function KEnOrina ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>K en Orina</h2>
        <Input
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
