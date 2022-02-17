import { Input } from '../Input'

export default function AntiDsDna ({
  values,
  onChange,
  value,
  register,
  pdf,
  required
}) {
  return (
    <>
      <h3>Anti ds DNA</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        measure='UI/mL'
        name='anti_ds_dna'
        type='number'
        placeholder='Anti ds DNA...'
      />
    </>
  )
}
