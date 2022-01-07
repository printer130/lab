import { Input } from '../Input'

export default function LitioLi ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Litio Li</h2>
        <Input
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
