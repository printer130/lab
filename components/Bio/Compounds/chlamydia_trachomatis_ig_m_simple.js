import { Input } from '../Input'

export default function ChlamydiaTrachomatisIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Chlamydia Trachomatis IgM</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Chlamydia Trachomatis IgM....'
        name='chlamydia_trachomatis_ig_m_simple'
      />
    </section>
  )
}
