import { Input } from '../Input'

export default function Lactato ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Lactato</h2>
        <Input
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
