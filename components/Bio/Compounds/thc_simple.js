import { NegativePositive } from '../NegativePositive'

export default function THC ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>THC</h2>
        <NegativePositive
          values={!values ? value : values}
          register={register}
          name='thc_simple'
        />
      </section>
    </>
  )
}
