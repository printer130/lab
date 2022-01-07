import { Input } from '../Input'

export default function FTAABSSifilisIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>FTA-ABS (Sifilis) - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='FTA-ABS (Sifilis) - IgM....'
          name='fta_abs_sifilis_ig_m_simple'
        />
      </section>
    </>
  )
}
