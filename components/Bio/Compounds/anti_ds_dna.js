import { Input } from '../Input'

export default function AntiDsDna ({
  values,
  onChange,
  value,
  register,
  required
}) {
  return (
    <>
      <h2>Anti ds DNA</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        measure='UI/mL'
        name='anti_ds_dna'
        type='number'
        placeholder='Anti ds DNA...'
      />
    </>
  )
}
