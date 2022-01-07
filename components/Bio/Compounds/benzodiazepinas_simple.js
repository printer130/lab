import { NegativePositive } from '../NegativePositive'

export default function Benzodiazepinas ({
  values,
  register
}) {
  return (
    <>
      <section>
        <h2>Benzodiazepinas</h2>
        <NegativePositive
          values={values}
          register={register}
          name='benzodiazepinas_simple'
        />
      </section>
    </>
  )
}
