import { Input } from '../Input'

export default function ToxoplasmosisIgG ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Toxoplasmosis IgG</h3>
        <Input
          pdf={pdf}
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
