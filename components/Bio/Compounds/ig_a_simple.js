import { Input } from '../Input'

export default function IgA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Ig A</h2>
        <Input
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
