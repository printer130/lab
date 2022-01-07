import { Input } from '../Input'

export default function CKMM ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>CK MM</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='CK MM....'
          name='ck_mm_simple'
        />
      </section>
    </>
  )
}
