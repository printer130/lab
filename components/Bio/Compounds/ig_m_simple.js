import { Input } from '../Input'

export default function IgM ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='IgM....'
          name='ig_m_simple'
        />
      </section>
    </>
  )
}
