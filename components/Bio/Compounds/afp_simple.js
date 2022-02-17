import { Input } from '../Input'

export default function AFP ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>AFP</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='AFP...'
          name='afp_simple'
        />
      </section>
    </>
  )
}
