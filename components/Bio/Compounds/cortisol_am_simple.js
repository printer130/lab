import { Input } from '../Input'

export default function CortisonAM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Cortisol AM</h2>
        <Input
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
