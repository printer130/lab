import { Input } from '../Input'

export default function FosforoP ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Fosforo P</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          pdf={pdf}
          register={register}
          type='number'
          placeholder='Fosforo P....'
          name='fosforo_p_simple'
        />
      </section>
    </>
  )
}
