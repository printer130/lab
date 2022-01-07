import { Input } from '../Input'

export default function FSH ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>FSH</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='FSH....'
          name='fsh_simple'
        />
      </section>
    </>
  )
}
