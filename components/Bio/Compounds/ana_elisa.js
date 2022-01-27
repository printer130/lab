import { Input } from '../Input'

export default function AnaElisa ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>ANA (Elisa)</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='ana_elisa'
        measure='UAI/mL'
        type='number'
        placeholder='ANA (Elisa)...'
      />
    </>
  )
}
