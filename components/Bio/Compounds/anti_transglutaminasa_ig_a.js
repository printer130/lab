import { Select } from '../Select'

export default function AntiTransglutaminasaIgA ({
  values,
  register,
  required
}) {
  return (
    <>
      <h2>Anti Transglutaminasa IgA</h2>
      <Select
        values={values}
        required={required}
        register={register}
        name='anti_transglutaminasa_ig_a'
      />
    </>
  )
}
