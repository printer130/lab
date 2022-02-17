import { Select } from '../Select'

export default function AntiTransglutaminasaIgA ({
  values,
  register,
  pdf,
  required
}) {
  return (
    <>
      <h3>Anti Transglutaminasa IgA</h3>
      <Select
        pdf={pdf}
        values={values}
        required={required}
        register={register}
        name='anti_transglutaminasa_ig_a'
      />
    </>
  )
}
