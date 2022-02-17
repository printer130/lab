import { NegativePositive } from '../NegativePositive'

export default function ClostridumDifficileToxinasAyB ({ pdf, values, register }) {
  return (
    <section>
      <h3>Clostridium Difficile Toxinas A y B</h3>
      <NegativePositive
        pdf={pdf}
        name='clostridium_difficile_tox_a_y_b'
        values={values}
        register={register}
      />
    </section>
  )
}
