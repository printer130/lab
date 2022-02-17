import { Input } from '../Input'

export default function Lactato ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Lactato</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Lactato....'
          name='lactato_simple'
        />
      </section>
    </>
  )
}
