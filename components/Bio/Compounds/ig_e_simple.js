import { Input } from '../Input'

export default function IgE ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>IgE</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='IgE....'
          name='ig_e_simple'
        />
      </section>
    </>
  )
}
