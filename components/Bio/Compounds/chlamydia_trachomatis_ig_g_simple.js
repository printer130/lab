import { Input } from '../Input'

export default function ChlamydiaTrachomatisIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Chlamydia Trachomatis IgG</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Chlamydia Trachomatis IgG....'
        name='chlamydia_trachomatis_ig_g_simple'
      />
    </section>
  )
}
