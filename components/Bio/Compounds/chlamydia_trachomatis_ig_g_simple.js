import { Input } from '../Input'

export default function ChlamydiaTrachomatisIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Chlamydia Trachomatis IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Chlamydia Trachomatis IgG....'
          name='chlamydia_trachomatis_ig_g_simple'
        />
      </section>
    </>
  )
}
