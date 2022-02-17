import { Input } from '../Input'

export default function AntiTransglutaminasaIgGElisa ({
  onChange,
  value,
  register,
  pdf,
  required,
  values
}) {
  return (
    <>
      <h3>Anti Transglutaminasa IgG</h3>
      <Input
        pdf={pdf}
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
