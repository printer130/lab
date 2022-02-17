import { Input } from '../Input'

export default function AnaIf ({
  values,
  onChange,
  value,
  register,
  pdf,
  required
}) {
  return (
    <>
      <h3>ANA (IF)</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        pdf={pdf}
        name='ana_if'
        type='number'
        placeholder='ANA (IF)...'
      />
    </>
  )
}
