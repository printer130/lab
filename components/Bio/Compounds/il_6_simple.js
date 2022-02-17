import { Input } from '../Input'

export default function IL6 ({ value, onChange, pdf, values, register }) {
  return (
    <>
      <section>
        <h3>IL - 6</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          type='number'
          onChange={onChange}
          placeholder='IL - 6....'
          register={register}
          name='il_6_simple'
        />
      </section>
    </>
  )
}
