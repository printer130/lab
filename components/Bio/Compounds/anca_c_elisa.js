import { Input } from '../Input'

export default function AncaCElisa ({
  values,
  value,
  register,
  onChange,
  required
}) {
  return (
    <>
      <h2>ANCA - C (Elisa)</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anca_c_elisa'
        type='number'
        placeholder='ANCA - C (Elisa)...'
      >
        ANCA-C (Elisa)
      </Input>

    </>
  )
}
