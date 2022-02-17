import { Input } from '../Input'

export default function AncaPElisa ({
  onChange,
  value,
  values,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h3>ANCA - P (Elisa)</h3>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        name='anca_p_elisa'
        type='number'
        placeholder='ANCA - P (Elisa)...'
      />
    </>
  )
}
