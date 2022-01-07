import { NegativePositive } from '../NegativePositive'

export default function Rpr ({ register, values }) {
  return (
    <>
      <h2>RPR</h2>

      <NegativePositive
        values={values}
        register={register}
        name='rpr'
        n='No Reactivo'
        p='Reactivo'
      />
    </>
  )
}
