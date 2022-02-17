import { Input } from '../Input'

export default function Insulina30min ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Insulina 30 min</h3>
        <Input
          pdf={pdf}
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
