import { Input } from '../Input'

export default function Amilasa ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Amilasa</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='Amilasa....'
          name='amilasa_simple'
        />
      </section>
    </>
  )
}
