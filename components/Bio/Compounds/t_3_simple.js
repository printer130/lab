import { Input } from '../Input'

export default function T3 ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>T3</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T3....'
          name='t_3_simple'
        />
      </section>
    </>
  )
}
