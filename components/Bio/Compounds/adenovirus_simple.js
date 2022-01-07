import { NegativePositive } from '../NegativePositive'

export default function Adenovirus ({ register, values }) {
  return (
    <>
      <section>
        <h2>Adenovirus</h2>
        <NegativePositive
          values={!values ? null : values}
          register={register}
          name='adenovirus_simple'
        />
      </section>
    </>
  )
}
