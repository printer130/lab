import { Input } from '../Input'

export default function HepatitisAHAVIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hepatitis A (HAV) - IgM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hepatitis A (HAV) - IgM....'
          name='hepatitis_a_hav_ig_m_simple'
        />
      </section>
    </>
  )
}
