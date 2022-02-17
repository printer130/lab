import { Input } from '../Input'

export default function C3 ({ values, value, pdf, onChange, register }) {
  return (
    <section>
      <h3>C3</h3>
      <Input
        pdf={pdf}
        type='number'
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        placeholder='c3....'
        name='c_3_simple'
      />
    </section>
  )
}
