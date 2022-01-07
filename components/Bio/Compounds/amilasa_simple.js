import { Input } from '../Input'

export default function Amilasa ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Amilasa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Amilasa....'
          name='amilasa_simple'
        />
      </section>
    </>
  )
}
