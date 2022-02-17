import { NegativePositive } from '../NegativePositive'

export default function ChalamydiaEnOrina ({
  values,
  register,
  pdf
}) {
  return (
    <section>
      <h3>Chalamydia En Orina</h3>
      <NegativePositive
        pdf={pdf}
        values={values}
        register={register}
        name='chlamydia_en_orina_simple'
      />
    </section>
  )
}
