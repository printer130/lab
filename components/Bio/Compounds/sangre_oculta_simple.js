import { NegativePositive } from '../NegativePositive'

export default function SangreOculta ({ register, values }) {
  return (
    <>
      <section>
        <h2>Sangre Oculta</h2>
        <NegativePositive
          values={values}
          register={register}
          name='sangre_oculta_simple'
        />
      </section>
    </>
  )
}
