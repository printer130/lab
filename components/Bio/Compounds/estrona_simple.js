import { Input } from '../Input'

export default function Estrona ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Estrona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Estrona....'
          name='estrona_simple'
        />
      </section>
    </>
  )
}
