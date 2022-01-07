import { Input } from '../Input'

export default function AntiEndomisioIgGIF ({
  values,
  onChange,
  value,
  register,
  required
}) {
  return (
    <>
      <h2>Anti Endomisio IgG (IF)</h2>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anti_endomisio_ig_g_if'
        type='number'
        placeholder='Anti Endomisio IgG (IF)...'
      >
        Anti Endomisio IgG (IF)
      </Input>
    </>
  )
}
