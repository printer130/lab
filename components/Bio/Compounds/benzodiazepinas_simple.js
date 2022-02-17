import { NegativePositive } from '../NegativePositive'

export default function Benzodiazepinas ({
  values,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Benzodiazepinas</h3>
        <NegativePositive
          pdf={pdf}
          values={values}
          register={register}
          name='benzodiazepinas_simple'
        />
      </section>
    </>
  )
}
