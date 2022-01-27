import { Input } from '../Input'

export default function AncaPElisa ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>ANCA - P (Elisa)</h2>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anca_p_elisa'
        type='number'
        placeholder='ANCA - P (Elisa)...'
      />
    </>
  )
}
