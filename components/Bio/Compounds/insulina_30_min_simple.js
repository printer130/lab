import { Input } from '../Input'

export default function Insulina30min ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Insulina 30 min</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Insulina 30 min....'
          name='insulina_30_min_simple'
        />
      </section>
    </>
  )
}
