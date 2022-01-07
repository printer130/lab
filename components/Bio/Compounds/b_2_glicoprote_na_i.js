import { Input } from '../Input'

export default function B2GlicoproteinaI ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>B2 Glicoproteína I</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='b_2_glicoprote_na_i'
        measure='U/mL'
        type='number'
        placeholder='B2 Glicoproteína I...'
      >
        B2 Glicoproteína I
      </Input>
    </>
  )
}
