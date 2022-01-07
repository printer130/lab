import { Input } from '../Input'

export default function SHBG ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>SHBG</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='SHBG....'
          name='shbg_simple'
        />
      </section>
    </>
  )
}
