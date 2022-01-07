import { Input } from '../Input'

export default function Testosterona ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Testosterona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Testosterona....'
          name='testosterona_simple'
        />
      </section>
    </>
  )
}
