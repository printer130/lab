import { Select } from '../Select'

export default function AntiGliadinaIgA ({ values, register, required }) {
  return (
    <>
      <h2>Anti Gliadina IgA</h2>
      <Select
        values={values}
        name='anti_gliadina_ig_a_elisa'
        register={register}
        required={required}
      />
    </>
  )
}
