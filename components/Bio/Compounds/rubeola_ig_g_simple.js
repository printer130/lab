import { Input } from '../Input'

export default function RubeolaIgG ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Rubeola - IgG</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Rubeola - IgG....'
          name='rubeola_ig_g_simple'
        />
      </section>
    </>
  )
}
