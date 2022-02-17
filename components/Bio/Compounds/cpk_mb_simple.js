import { Input } from '../Input'

export default function CPKMB ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>CPK MB</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='CPK MB....'
          name='cpk_mb_simple'
        />
      </section>
    </>
  )
}
