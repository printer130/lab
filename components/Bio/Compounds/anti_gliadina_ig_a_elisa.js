import { Select } from '../Select'

export default function AntiGliadinaIgA ({ values, pdf, register, required }) {
  return (
    <>
      <h3>Anti Gliadina IgA</h3>
      <Select
        values={values}
        pdf={pdf}
        name='anti_gliadina_ig_a_elisa'
        register={register}
        required={required}
      />
    </>
  )
}
