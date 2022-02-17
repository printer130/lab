import { NegativePositive } from '../NegativePositive'

export default function Adenovirus ({ register, pdf, values }) {
  return (
    <>
      <section>
        <h3>Adenovirus</h3>
        <NegativePositive
          pdf={pdf}
          values={!values ? null : values}
          register={register}
          name='adenovirus_simple'
        />
      </section>
    </>
  )
}
