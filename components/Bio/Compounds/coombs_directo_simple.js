import { NegativePositive } from '../NegativePositive'

export default function CoombsDirecto ({ register, values, pdf }) {
  return (
    <section>
      <h3>COOMBS Directo</h3>
      <NegativePositive
        values={values}
        pdf={pdf}
        register={register}
        name='coombs_directo_simple'
      />
    </section>
  )
}
