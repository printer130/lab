import { NegativePositive } from '../NegativePositive'

export default function CoombsIndirecto ({ register, values }) {
  console.log('values', values)
  return (
    <>
      <section>
        <h2>COOMBS Indirecto</h2>
        <NegativePositive
          values={values}
          register={register}
          name='coombs_indirecto_simple'
        />
      </section>
    </>
  )
}
