import { NegativePositive } from '../NegativePositive'

export default function THC ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>THC</h3>
        <NegativePositive
          pdf={pdf}
          values={!values ? value : values}
          register={register}
          name='thc_simple'
        />
      </section>
    </>
  )
}
