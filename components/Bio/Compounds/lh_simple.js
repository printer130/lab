import { Input } from '../Input'

export default function LH ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>LH</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='LH....'
          name='lh_simple'
        />
      </section>
    </>
  )
}
