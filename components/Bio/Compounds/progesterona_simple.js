import { Input } from '../Input'

export default function Progesterona ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Progesterona</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Progesterona....'
          name='progesterona_simple'
        />
      </section>
    </>
  )
}
