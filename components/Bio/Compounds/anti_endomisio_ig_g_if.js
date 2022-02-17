import { Input } from '../Input'

export default function AntiEndomisioIgGIF ({
  values,
  onChange,
  value,
  register,
  pdf,
  required
}) {
  return (
    <>
      <h3>Anti Endomisio IgG (IF)</h3>

      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        pdf={pdf}
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
