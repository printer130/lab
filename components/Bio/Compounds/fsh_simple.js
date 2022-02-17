import { Input } from '../Input'

export default function FSH ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h3>FSH</h3>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          pdf={pdf}
          type='number'
          placeholder='FSH....'
          name='fsh_simple'
        />
      </section>
    </>
  )
}
