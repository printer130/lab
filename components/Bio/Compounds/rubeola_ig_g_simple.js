import { Input } from '../Input'

export default function RubeolaIgM ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Rubeola - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Rubeola - IgM....'
          name='rubeola_ig_g_simple'
        />
      </section>
    </>
  )
}
