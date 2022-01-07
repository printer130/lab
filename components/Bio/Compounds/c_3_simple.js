import { Input } from '../Input'

export default function C3 ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>C3</h2>
        <Input
          type='number'
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          placeholder='c3....'
          name='c_3_simple'
        />
      </section>
    </>
  )
}
