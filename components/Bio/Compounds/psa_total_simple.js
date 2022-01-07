import { Input } from '../Input'

export default function PSATotal ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>PSA Total</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='PSA Total...'
          name='psa_total_simple'
        />
      </section>
    </>
  )
}
