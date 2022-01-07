import { Input } from '../Input'

export default function DHEAS ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>DHEAS</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='DHEAS....'
          name='dheas_simple'
        />
      </section>
    </>
  )
}
