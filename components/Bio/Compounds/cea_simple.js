import { Input } from '../Input'

export default function CEA ({ value, values, pdf, onChange, register }) {
  return (
    <section>
      <h3>CEA</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='CEA...'
        name='cea_simple'
      />
    </section>
  )
}
