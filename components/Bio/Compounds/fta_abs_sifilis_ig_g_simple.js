import { Input } from '../Input'

export default function FTAABSSifilisIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>FTA-ABS (Sifilis) - IgG</h3>
        <Input
          pdf={pdf}
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
