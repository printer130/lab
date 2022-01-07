import { Input } from '../Input'

export default function ChagasElisa ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Chagas ELISA</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Chagas ELISA....'
          name='chagas_elisa_simple'
        />
      </section>
    </>
  )
}
