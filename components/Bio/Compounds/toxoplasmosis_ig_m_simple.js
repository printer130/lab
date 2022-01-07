import { Input } from '../Input'

export default function ToxoplasmosisIgM ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Toxoplasmosis IgM</h2>
        <Input
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
