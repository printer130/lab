import { NegativePositive } from '../NegativePositive'

export default function ChalamydiaEnOrina ({
  values,
  value,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Chalamydia En Orina</h2>
        <NegativePositive
          values={values}
          register={register}
          name='chlamydia_en_orina_simple'
        />
      </section>
    </>
  )
}
