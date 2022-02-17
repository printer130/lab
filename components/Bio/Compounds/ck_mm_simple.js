import { Input } from '../Input'

export default function CKMM ({ value, values, pdf, onChange, register }) {
  return (
    <section>
      <h3>CK MM</h3>
      <Input
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        pdf={pdf}
        placeholder='CK MM....'
        name='ck_mm_simple'
      />
    </section>
  )
}
