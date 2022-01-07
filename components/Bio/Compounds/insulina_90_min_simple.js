import { Input } from '../Input'

export default function Insulina90min ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Insulina 90 min</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Insulina 90 min....'
          name='insulina_90_min_simple'
        />
      </section>
    </>
  )
}
