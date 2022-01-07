import { Select } from '../Select'

export default function AntiEndomisioIgaIf ({ register, required, values }) {
  return (
    <>
      <h2>Anti Endomisio IgA IF</h2>
      <Select
        values={values}
        name='anti_endomisio_ig_a_if'
        register={register}
        required={required}
      />
    </>
  )
}
