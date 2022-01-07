import { Input } from '../Input'

export default function CPKMB ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CPK MB</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='CPK MB....'
          name='cpk_mb_simple'
        />
      </section>
    </>
  )
}
