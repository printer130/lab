import { Input } from '../Input'

export default function Estrona ({ value, values, pdf, onChange, register }) {
  return (
    <>
      <section>
        <h3>Estrona</h3>
        <Input
          pdf={pdf}
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
