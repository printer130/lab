import { Input } from '../Input'

export default function TSH ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>TSH</h2>
        <Input
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
