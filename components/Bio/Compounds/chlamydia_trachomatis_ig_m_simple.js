import { Input } from '../Input'

export default function ChlamydiaTrachomatisIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Chlamydia Trachomatis IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Chlamydia Trachomatis IgM....'
          name='chlamydia_trachomatis_ig_m_simple'
        />
      </section>
    </>
  )
}
