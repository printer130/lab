import { Input } from '../Input'

export default function B2GlicoproteinaIgG ({
  onChange,
  value,
  values,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h3>B2 Glicoproteína - IgG</h3>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        pdf={pdf}
        name='b_2_glicoprote_na_ig_g'
        measure='U/mL'
        type='number'
        placeholder='B2 Glicoproteína - IgG...'
      >
        B2 Glicoproteína - IgG
      </Input>
    </>
  )
}
