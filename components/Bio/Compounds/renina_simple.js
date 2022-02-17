import { Input } from '../Input'

export default function Renina ({ value, pdf, onChange, values, register }) {
  return (
    <>
      <section>
        <h3>Renina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Renina....'
          name='renina_simple'
        />
      </section>
    </>
  )
}
