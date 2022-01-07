import { Input } from '../Input'

export default function FTAABSSifilisIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>FTA-ABS (Sifilis) - IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='FTA-ABS (Sifilis) - IgG....'
          name='fta_abs_sifilis_ig_g_simple'
        />
      </section>
    </>
  )
}
