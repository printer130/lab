import { Input } from '../Input'

export default function Fenilalanina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Fenilalanina</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Fenilalanina....'
          name='fenilalanina_simple'
        />
      </section>
    </>
  )
}
