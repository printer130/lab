import { Input } from '../Input'

export default function ToxoplasmosisIgG ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Toxoplasmosis IgG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Toxoplasmosis IgG....'
          name='toxoplasmosis_ig_g_simple'
        />
      </section>
    </>
  )
}
