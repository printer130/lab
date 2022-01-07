import { Input } from '../Input'

export default function T4 ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>T4</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T4....'
          name='t_4_simple'
        />
      </section>
    </>
  )
}
