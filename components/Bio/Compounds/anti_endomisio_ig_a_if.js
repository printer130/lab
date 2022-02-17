import { Select } from '../Select'

export default function AntiEndomisioIgaIf ({ register, pdf, required, values }) {
  return (
    <>
      <h3>Anti Endomisio IgA IF</h3>
      <Select
        values={values}
        pdf={pdf}
        name='anti_endomisio_ig_a_if'
        register={register}
        required={required}
      />
    </>
  )
}
