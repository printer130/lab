import { Input } from '../Input'

export default function Homocisteina ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Homocisteína</h2>
        <Input
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
