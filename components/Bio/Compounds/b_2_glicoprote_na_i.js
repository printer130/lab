import { Input } from '../Input'

export default function B2GlicoproteinaI ({
  onChange,
  value,
  register,
  required,
  pdf,
  values
}) {
  return (
    <>
      <h3>B2 Glicoproteína I</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        pdf={pdf}
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
