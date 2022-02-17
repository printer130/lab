import { Input } from '../Input'

export default function Colesterol ({ value, values, onChange, pdf, register }) {
  return (
    <section>
      <h3>Colesterol</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Colesterol....'
        name='colesterol_simple'
      />
    </section>
  )
}
