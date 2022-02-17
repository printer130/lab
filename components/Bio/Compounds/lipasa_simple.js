import { Input } from '../Input'

export default function Lipasa ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Lipasa</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Lipasa....'
          name='lipasa_simple'
        />
      </section>
    </>
  )
}
