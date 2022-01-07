import { NegativePositive } from '../NegativePositive'

export default function COVID19Flujolateral ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>COVID 19 (Flujo lateral)</h2>
        <NegativePositive
          register={register}
          values={values}
          name='covid_19_flujo_lateral_simple'
        />
      </section>
    </>
  )
}
