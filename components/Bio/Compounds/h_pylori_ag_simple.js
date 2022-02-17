import { NegativePositive } from '../NegativePositive'

export default function HPyloriAg ({ register, pdf, values }) {
  return (
    <>
      <section>
        <h3>H. Pylori Ag.</h3>
        <NegativePositive
          values={values}
          pdf={pdf}
          register={register}
          name='h_pylori_ag_simple'
        />
      </section>
    </>
  )
}
