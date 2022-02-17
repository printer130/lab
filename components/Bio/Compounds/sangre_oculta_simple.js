import { NegativePositive } from '../NegativePositive'

export default function SangreOculta ({ register, values, pdf }) {
  return (
    <>
      <section>
        <h3>Sangre Oculta</h3>
        <NegativePositive
          values={values}
          pdf={pdf}
          register={register}
          name='sangre_oculta_simple'
        />
      </section>
    </>
  )
}
