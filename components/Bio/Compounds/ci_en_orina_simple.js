import { Input } from '../Input'

export default function CInOrina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CI en Orina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='ci en Orina'
          name='ci_en_orina_simple'
        />
      </section>
    </>
  )
}
