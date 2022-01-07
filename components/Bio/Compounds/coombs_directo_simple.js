import { NegativePositive } from '../NegativePositive'

export default function CoombsDirecto ({ register, values }) {
  return (
    <>
      <section>
        <h2>COOMBS Directo</h2>
        <NegativePositive
          values={values}
          register={register}
          name='coombs_directo_simple'
        />
      </section>
    </>
  )
}
