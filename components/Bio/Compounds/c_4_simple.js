import { Input } from '../Input'

export default function C4 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>C4</h2>
        <Input
          type='number'
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          placeholder='c4....'
          name='c_4_simple'
        />
      </section>
    </>
  )
}
