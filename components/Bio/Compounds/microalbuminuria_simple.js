import { Input } from '../Input'

export default function Microalbuminuria ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Microalbuminuria</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='microalbuminuria....'
          name='microalbuminuria_simple'
        />
      </section>
    </>
  )
}
