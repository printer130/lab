import { Input } from '../Input'

export default function PSATotal ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>PSA Total</h3>
        <Input
          pdf={pdf}
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
