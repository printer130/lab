import { NegativePositive } from '../NegativePositive'

export default function Rpr ({ register, pdf, values }) {
  return (
    <>
      <h3>RT - PCR</h3>
      <NegativePositive
        values={values}
        pdf={pdf}
        register={register}
        name='rt_pcr'
      />
    </>
  )
}
