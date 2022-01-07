import { Input } from '../Input'

export default function CisticercosisWesternBlot ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Cisticercosis Western Blot</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cisticercosis Western Blot....'
          name='cisticercosis_western_blot_simple'
        />
      </section>
    </>
  )
}
