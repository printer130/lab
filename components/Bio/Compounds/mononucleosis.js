import { NegativePositive } from '../NegativePositive'

export default function Mononucleares ({ register, values }) {
  return (
    <>
      <h2>Mononucleares</h2>
      <NegativePositive
        values={values}
        register={register}
        name='mononucleosis'
        n='NO REACTIVO'
        p='REACTIVO'
      />
    </>
  )
}
