import { Input } from '../Input'

export default function Aldosterona ({ values, pdf, value, onChange, register }) {
  return (
    <>
      <section>
        <h3>Aldosterona</h3>
        <Input
          pdf={pdf}
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
