import { Input } from '../Input'

export default function B2GlicoproteinaIgM ({
  onChange,
  value,
  values,
  register,
  required,
  pdf
}) {
  return (
    <section>

      <h3>B2 Glicoproteína - IgM</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
        required={required}
        name='b_2_glicoprote_na_ig_m'
        measure='U/mL'
        type='number'
        placeholder='B2 Glicoproteína - IgM...'
      >
        B2 Glicoproteína - IgM
      </Input>
    </section>
  )
}
