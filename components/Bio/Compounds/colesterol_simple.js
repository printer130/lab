import { Input } from '../Input'

export default function Colesterol ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Colesterol</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Colesterol....'
          name='colesterol_simple'
        />
      </section>
    </>
  )
}
