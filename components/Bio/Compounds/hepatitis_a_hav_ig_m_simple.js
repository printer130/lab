import { Input } from '../Input'

export default function HepatitisAHAVIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hepatitis A (HAV) - IgM</h3>
        <Input
          pdf={pdf}
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
