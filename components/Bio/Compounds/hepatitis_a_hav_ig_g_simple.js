import { Input } from '../Input'

export default function HepatitisAHAVIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis A (HAV) - IgG</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis A (HAV) - IgG....'
          name='hepatitis_a_hav_ig_g_simple'
        />
      </section>
    </>
  )
}
