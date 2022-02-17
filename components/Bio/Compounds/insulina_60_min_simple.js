import { Input } from '../Input'

export default function Insulina60min ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Insulina 60 min</h3>
        <Input
          pdf={pdf}
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
