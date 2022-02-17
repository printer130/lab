import { Input } from '../Input'

export default function TSH ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>TSH</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='TSH....'
          name='tsh_simple'
        />
      </section>
    </>
  )
}
