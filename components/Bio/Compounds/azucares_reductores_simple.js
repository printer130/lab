import { NegativePositive } from '../NegativePositive'

export default function AzucaresReductores ({
  values,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Azucares Reductores</h3>
        <NegativePositive
          values={values}
          pdf={pdf}
          register={register}
          name='azucares_reductores_simple'
        />
      </section>
    </>
  )
}
