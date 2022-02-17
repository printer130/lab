import { Input } from '../Input'

export default function AncaCElisa ({
  values,
  value,
  register,
  pdf,
  onChange,
  required
}) {
  return (
    <>
      <h3>ANCA - C (Elisa)</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        pdf={pdf}
        name='anca_c_elisa'
        type='number'
        placeholder='ANCA - C (Elisa)...'
      />
    </>
  )
}
