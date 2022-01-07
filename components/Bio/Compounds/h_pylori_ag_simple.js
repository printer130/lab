import { NegativePositive } from '../NegativePositive'

export default function HPyloriAg ({ register, values }) {
  return (
    <>
      <section>
        <h2>H. Pylori Ag.</h2>
        <NegativePositive
          values={values}
          register={register}
          name='h_pylori_ag_simple'
        />
      </section>
    </>
  )
}
