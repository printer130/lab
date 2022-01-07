import { Input } from '../Input'

export default function T3Libre ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>T3 libre</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='T3 libre....'
          name='t_3_libre_simple'
        />
      </section>
    </>
  )
}
