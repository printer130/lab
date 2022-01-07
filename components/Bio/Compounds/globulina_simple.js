import { Input } from '../Input'

export default function Globulina ({ value, onChange, register, values }) {
  return (
    <>
      <section>
        <h2>Globulina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Globulina....'
          name='globulina_simple'
        />
      </section>
    </>
  )
}
