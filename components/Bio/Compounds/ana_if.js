import { Input } from '../Input'

export default function AnaIf ({
  values,
  onChange,
  value,
  register,
  required
}) {
  return (
    <>
      <h2>ANA (IF)</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='ana_if'
        type='number'
        placeholder='ANA (IF)...'
      >
        ANA (IF)
      </Input>
    </>
  )
}
