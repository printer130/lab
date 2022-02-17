import { Input } from '../Input'

export default function CortisonAM ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Cortisol AM</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Cortison AM....'
          name='cortisol_am_simple'
        />
      </section>
    </>
  )
}
