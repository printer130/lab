import { NegativePositive } from '../NegativePositive'

export default function Cocaina ({ values, register }) {
  return (
    <>
      <section>
        <h2>Cocaína</h2>
        <NegativePositive
          register={register}
          values={values}
          name='coca_na_simple'
        />
      </section>
    </>
  )
}
