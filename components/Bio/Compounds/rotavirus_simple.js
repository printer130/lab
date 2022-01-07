import { NegativePositive } from '../NegativePositive'

export default function Rotavirus ({ register, values }) {
  return (
    <>
      <section>
        <h2>Rotavirus</h2>
        <NegativePositive
          values={values}
          register={register}
          name='rotavirus_simple'
        />
      </section>
    </>
  )
}
