import { Input } from '../Input'

export default function ToxoplasmosisHAI ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Toxoplasmosis HAI</h2>
        <Input
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
