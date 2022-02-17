import { Input } from '../Input'

export default function IgA ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Ig A</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Ig A....'
          name='ig_a_simple'
        />
      </section>
    </>
  )
}
