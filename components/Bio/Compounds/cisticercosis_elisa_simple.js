import { Input } from '../Input'

export default function CisticercosisElisa ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Cisticercosis Elisa</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Cisticercosis Elisa....'
        name='cisticercosis_elisa_simple'
      />
    </section>
  )
}
