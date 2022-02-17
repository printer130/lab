import { Input } from '../Input'

export default function AntiGliadinaIgGElisa ({
  onChange,
  value,
  values,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h3>Anti Gliadina IgG (Elisa)</h3>
      <Input
        value={!values ? value : values}
        register={register}
        pdf={pdf}
        onChange={onChange}
        required={required}
        name='anti_gliadina_ig_g_elisa'
        type='number'
        placeholder='Anti Gliadina IgG (Elisa)...'
      />
    </>
  )
}
