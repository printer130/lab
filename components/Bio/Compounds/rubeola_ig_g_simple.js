import { Input } from '../Input'

export default function RubeolaIgM ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Rubeola - IgM</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Rubeola - IgM....'
          name='rubeola_ig_g_simple'
        />
      </section>
    </>
  )
}
