import { NegativePositive } from '../NegativePositive'

export default function Crioglobulina ({ values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>Crioglobulina</h3>
        <NegativePositive
          values={values}
          pdf={pdf}
          register={register}
          name='crioglobulina_simple'
        />
      </section>
    </>
  )
}
