import { Input } from '../Input'

export default function CPK ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CPK</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='CPK....'
          name='cpk_simple'
        />
      </section>
    </>
  )
}
