import { NegativePositive } from '../NegativePositive'

export default function Rotavirus ({ register, values, pdf }) {
  return (
    <>
      <section>
        <h3>Rotavirus</h3>
        <NegativePositive
          values={values}
          pdf={pdf}
          register={register}
          name='rotavirus_simple'
        />
      </section>
    </>
  )
}
