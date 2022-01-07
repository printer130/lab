import { Input } from '../Input'

export default function Estradiol ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Estradiol</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Estradiol....'
          name='estradiol_simple'
        />
      </section>
    </>
  )
}
