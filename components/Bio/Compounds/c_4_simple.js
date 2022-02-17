import { Input } from '../Input'

export default function C4 ({ value, values, pdf, onChange, register }) {
  return (
    <section>
      <h3>C4</h3>
      <Input
        pdf={pdf}
        type='number'
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        placeholder='c4....'
        name='c_4_simple'
      />
    </section>
  )
}
