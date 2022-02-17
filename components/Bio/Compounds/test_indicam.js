import { NegativePositive } from '../NegativePositive'

export default function TestIndicam ({ register, values, pdf }) {
  return (
    <>
      <h3>Test de Inducam</h3>

      <NegativePositive
        values={values}
        register={register}
        name='test_indicam'
        n='Grado 0'
        p='Grado 1'
        checked
        pdf={pdf}
      />

      <NegativePositive
        values={values}
        register={register}
        name='test_indicam'
        n='Grado 2'
        p='Grado 3'
        pdf={pdf}
      />
    </>
  )
}
