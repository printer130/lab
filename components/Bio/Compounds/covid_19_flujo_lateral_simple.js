import { NegativePositive } from '../NegativePositive'

export default function COVID19Flujolateral ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>COVID 19 (Flujo lateral)</h3>
        <NegativePositive
          pdf={pdf}
          register={register}
          values={values}
          name='covid_19_flujo_lateral_simple'
        />
      </section>
    </>
  )
}
