import { Input } from '../Input'

export default function Renina ({ value, onChange, values, register }) {
  return (
    <>
      <section>
        <h2>Renina</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Renina....'
          name='renina_simple'
        />
      </section>
    </>
  )
}
