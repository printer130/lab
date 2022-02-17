import { Input } from '../Input'

export default function Homocisteina ({ value, pdf, values, onChange, register }) {
  return (
    <>
      <section>
        <h3>Homocisteína</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Homocisteína....'
          name='homociste_na_simple'
        />
      </section>
    </>
  )
}
