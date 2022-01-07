import { Input } from '../Input'

export default function Lipasa ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Lipasa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Lipasa....'
          name='lipasa_simple'
        />
      </section>
    </>
  )
}
