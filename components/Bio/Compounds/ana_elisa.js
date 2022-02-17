import { Input } from '../Input'

export default function AnaElisa ({
  onChange,
  value,
  values,
  register,
  pdf,
  required
}) {
  return (
    <>
      <h3>ANA (Elisa)</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        name='ana_elisa'
        measure='UAI/mL'
        type='number'
        placeholder='ANA (Elisa)...'
      />
    </>
  )
}
