import { Input } from '../Input'

export default function IgG ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>Ig G</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Ig G....'
          name='ig_g_simple'
        />
      </section>
    </>
  )
}
