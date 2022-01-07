import { NegativePositive } from '../NegativePositive'

export default function ClostridumDifficileToxinasAyB ({ values, register }) {
  return (
    <>
      <section>
        <h2>Clostridium Difficile Toxinas A y B</h2>
        <NegativePositive
          name='clostridium_difficile_tox_a_y_b'
          values={values}
          register={register}
        />
      </section>
    </>
  )
}
