import { Input } from '../Input'

export default function ColesterolLDL ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Colesterol LDL</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Colesterol LDL....'
          name='colesterol_ldl_simple'
        />
      </section>
    </>
  )
}
