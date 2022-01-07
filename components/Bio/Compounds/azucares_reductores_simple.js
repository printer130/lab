import { NegativePositive } from '../NegativePositive'

export default function AzucaresReductores ({
  values,
  register
}) {
  return (
    <>
      <section>
        <h2>Azucares Reductores</h2>
        <NegativePositive
          values={values}
          register={register}
          name='azucares_reductores_simple'
        />
      </section>
    </>
  )
}
