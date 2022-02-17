import { Input } from '../Input'

export default function ToxoplasmosisHAI ({
  value,
  values,
  onChange,
  pdf,
  register
}) {
  return (
    <>
      <section>
        <h3>Toxoplasmosis HAI</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Toxoplasmosis HAI....'
          name='toxoplasmosis_hai_simple'
        />
      </section>
    </>
  )
}
