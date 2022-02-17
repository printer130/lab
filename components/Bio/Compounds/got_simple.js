import { Input } from '../Input'

export default function GOT ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>GOt</h3>
        <Input
          pdf={pdf}
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
