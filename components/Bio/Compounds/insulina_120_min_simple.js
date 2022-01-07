import { Input } from '../Input'

export default function Insulina120min ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Insulina 120 min</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Insulina 120 min....'
          name='insulina_120_min_simple'
        />
      </section>
    </>
  )
}
