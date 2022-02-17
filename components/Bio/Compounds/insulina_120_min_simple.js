import { Input } from '../Input'

export default function Insulina120min ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Insulina 120 min</h3>
        <Input
          pdf={pdf}
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
