import { Input } from '../Input'

export default function AntiGliadinaIgGElisa ({
  onChange,
  value,
  values,
  register,
  required
}) {
  return (
    <>
      <h2>Anti Gliadina IgG (Elisa)</h2>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anti_gliadina_ig_g_elisa'
        type='number'
        placeholder='Anti Gliadina IgG (Elisa)...'
      >
        Anti Gliadina IgG (Elisa)
      </Input>
    </>
  )
}
