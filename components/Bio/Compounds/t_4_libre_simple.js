import { Input } from '../Input'

export default function T4Libre ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>T4 Libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T4 Libre....'
          name='t_4_libre_simple'
        />
      </section>
    </>
  )
}
