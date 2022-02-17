import { Input } from '../Input'

export default function LitioLi ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Litio Li</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Litio Li....'
          name='litio_li_simple'
        />
      </section>
    </>
  )
}
