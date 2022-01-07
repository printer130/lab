import { NegativePositive } from '../NegativePositive'

export default function TestIndicam ({ register, values }) {
  return (
    <>
      <h2>Test de Inducam</h2>

      <NegativePositive
        values={values}
        register={register}
        name='test_indicam'
        n='Grado 0'
        p='Grado 1'
      />
      <NegativePositive
        values={values}
        register={register}
        name='test_indicam'
        n='Grado 2'
        p='Grado 3'
      />
    </>
  )
}
