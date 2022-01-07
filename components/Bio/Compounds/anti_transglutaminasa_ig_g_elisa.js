import { Input } from '../Input'

export default function AntiTransglutaminasaIgGElisa ({
  onChange,
  value,
  register,
  required,
  values
}) {
  return (
    <>
      <h2>Anti Transglutaminasa IgG</h2>
      <Input
        value={!values ? value : values}
        register={register}
        onChange={onChange}
        required={required}
        name='anti_transglutaminasa_ig_g_elisa'
        measure='U/mL'
        type='number'
        placeholder='AntiTransglutaminasaIgGElisa'
      >
        Anti Transglutaminasa IgG
      </Input>
    </>
  )
}
