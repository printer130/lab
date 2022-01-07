import { Input } from '../Input'

export default function VLDL ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>VLDL</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='VLDL....'
          name='vldl_simple'
        />
      </section>
    </>
  )
}
