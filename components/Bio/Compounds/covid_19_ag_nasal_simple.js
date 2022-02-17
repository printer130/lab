import { NegativePositive } from '../NegativePositive'

export default function COVID19AgNasal ({ values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>COVID 19 (Ag. Nasal)</h3>
        <NegativePositive
          pdf={pdf}
          values={values}
          register={register}
          name='covid_19_ag_nasal_simple'
        />
      </section>
    </>
  )
}
