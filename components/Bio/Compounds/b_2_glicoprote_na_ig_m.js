import { Input } from '../Input'

export default function B2GlicoproteinaIgM ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>B2 Glicoproteína - IgM</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='b_2_glicoprote_na_ig_m'
        measure='U/mL'
        type='number'
        placeholder='B2 Glicoproteína - IgM...'
      >
        B2 Glicoproteína - IgM
      </Input>
    </>
  )
}
