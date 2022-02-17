import { NegativePositive } from '../NegativePositive'

export default function Rpr ({ register, pdf, values }) {
  return (
    <>
      <h3>RPR</h3>

      <NegativePositive
        values={values}
        pdf={pdf}
        register={register}
        name='rpr'
        n='No Reactivo'
        p='Reactivo'
      />
    </>
  )
}
