import { Input } from '../Input'

export default function Insulina90min ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Insulina 90 min</h3>
        <Input
          pdf={pdf}
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
