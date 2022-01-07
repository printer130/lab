import { NegativePositive } from '../NegativePositive'

export default function COVID19AgNasal ({ values, onChange, register }) {
  return (
    <>
      <section>
        <h2>COVID 19 (Ag. Nasal)</h2>
        <NegativePositive
          values={values}
          register={register}
          name='covid_19_ag_nasal_simple'
        />
      </section>
    </>
  )
}
