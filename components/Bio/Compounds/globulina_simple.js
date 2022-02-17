import { Input } from '../Input'

export default function Globulina ({ value, pdf, onChange, register, values }) {
  return (
    <>
      <section>
        <h3>Globulina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Globulina....'
          name='globulina_simple'
        />
      </section>
    </>
  )
}
