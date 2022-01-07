import { Input } from '../Input'

export default function AFP ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>AFP</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='AFP...'
          name='afp_simple'
        />
      </section>
    </>
  )
}
