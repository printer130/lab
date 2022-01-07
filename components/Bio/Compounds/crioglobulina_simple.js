import { NegativePositive } from '../NegativePositive'

export default function Crioglobulina ({ values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Crioglobulina</h2>
        <NegativePositive
          values={values}
          register={register}
          name='crioglobulina_simple'
        />
      </section>
    </>
  )
}
