import { Input } from '../Input'

export default function Progesterona ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Progesterona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Progesterona....'
          name='progesterona_simple'
        />
      </section>
    </>
  )
}
