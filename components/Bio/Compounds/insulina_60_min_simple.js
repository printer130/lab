import { Input } from '../Input'

export default function Insulina60min ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Insulina 60 min</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Insulina 60 min....'
          name='insulina_60_min_simple'
        />
      </section>
    </>
  )
}
