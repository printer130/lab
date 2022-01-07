import { Input } from '../Input'

export default function TG ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>TG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='TG....'
          name='tg_simple'
        />
      </section>
    </>
  )
}
