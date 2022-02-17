import { Input } from '../Input'

export default function ChagasElisa ({ value, values, onChange, register, pdf }) {
  return (
    <section>
      <h3>Chagas ELISA</h3>
      <Input
        pdf={pdf}
        value={!values ? value : values}
        onChange={onChange}
        register={register}
        type='number'
        placeholder='Chagas ELISA....'
        name='chagas_elisa_simple'
      />
    </section>
  )
}
