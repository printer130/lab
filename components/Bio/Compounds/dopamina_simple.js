import { Input } from '../Input'

export default function Dopamina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Dopamina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Dopamina....'
          name='dopamina_simple'
        />
      </section>
    </>
  )
}
