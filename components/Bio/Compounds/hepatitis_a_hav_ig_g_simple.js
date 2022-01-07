import { Input } from '../Input'

export default function HepatitisAHAVIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis A (HAV) - IgG</h2>
        <Input
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
