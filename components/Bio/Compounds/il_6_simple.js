import { Input } from '../Input'

export default function IL6 ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>IL - 6</h2>
        <Input
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
