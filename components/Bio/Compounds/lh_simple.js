import { Input } from '../Input'

export default function LH ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>LH</h3>
        <Input
          pdf={pdf}
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
