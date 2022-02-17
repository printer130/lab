import { NegativePositive } from '../NegativePositive'

export default function Mononucleares ({ register, pdf, values }) {
  return (
    <>
      <h3>Mononucleares</h3>
      <NegativePositive
        pdf={pdf}
        values={values}
        register={register}
        name='mononucleosis'
        n='NO REACTIVO'
        p='REACTIVO'
      />
    </>
  )
}
