import { NegativePositive } from '../NegativePositive'

export default function CoombsIndirecto ({ register, values, pdf }) {
  return (
    <section>
      <h3>COOMBS Indirecto</h3>
      <NegativePositive
        pdf={pdf}
        values={values}
        register={register}
        name='coombs_indirecto_simple'
      />
    </section>
  )
}
