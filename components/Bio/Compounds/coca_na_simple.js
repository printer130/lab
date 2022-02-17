import { NegativePositive } from '../NegativePositive'

export default function Cocaina ({ values, pdf, register }) {
  return (
    <section>
      <h3>Cocaína</h3>
      <NegativePositive
        register={register}
        values={values}
        pdf={pdf}
        name='coca_na_simple'
      />
    </section>
  )
}
