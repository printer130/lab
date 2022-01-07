import { Input } from '../Input'

export default function ATG ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>a-TG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='a-TG....'
          name='a_tg_simple'
        />
      </section>
    </>
  )
}
