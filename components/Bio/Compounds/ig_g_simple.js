import { Input } from '../Input'

export default function IgG ({ value, onChange, pdf, register, values }) {
  return (
    <>
      <section>
        <h3>Ig G</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          pdf={pdf}
          placeholder='Ig G....'
          name='ig_g_simple'
        />
      </section>
    </>
  )
}
