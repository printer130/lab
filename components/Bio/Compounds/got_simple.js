import { Input } from '../Input'

export default function GOT ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>GOt</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='GOT....'
          name='got_simple'
        />
      </section>
    </>
  )
}
