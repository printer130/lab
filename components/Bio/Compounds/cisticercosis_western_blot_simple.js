import { Input } from '../Input'

export default function CisticercosisWesternBlot ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Cisticercosis Western Blot</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Cisticercosis Western Blot....'
        name='cisticercosis_western_blot_simple'
      />
    </section>
  )
}
