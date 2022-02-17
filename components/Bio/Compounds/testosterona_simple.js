import { Input } from '../Input'

export default function Testosterona ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Testosterona</h3>
        <Input
          pdf={pdf}
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
