import { Input } from '../Input'

export default function IgM ({ value, onChange, pdf, register, values }) {
  return (
    <>
      <section>
        <h3>IgM</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='IgM....'
          name='ig_m_simple'
        />
      </section>
    </>
  )
}
