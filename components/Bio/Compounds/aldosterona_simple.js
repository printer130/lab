import { Input } from '../Input'

export default function Aldosterona ({ values, value, onChange, register }) {
  return (
    <>
      <section>
        <h2>Aldosterona</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Aldosterona....'
          name='aldosterona_simple'
        />
      </section>
    </>
  )
}
