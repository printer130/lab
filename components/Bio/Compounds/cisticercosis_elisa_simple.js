import { Input } from '../Input'

export default function CisticercosisElisa ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Cisticercosis Elisa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cisticercosis Elisa....'
          name='cisticercosis_elisa_simple'
        />
      </section>
    </>
  )
}
