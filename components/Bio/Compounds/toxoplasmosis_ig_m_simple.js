import { Input } from '../Input'

export default function ToxoplasmosisIgM ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Toxoplasmosis IgM</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Toxoplasmosis IgM....'
          name='toxoplasmosis_ig_m_simple'
        />
      </section>
    </>
  )
}
