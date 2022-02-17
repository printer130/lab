import { Input } from '../Input'

export default function Microalbuminuria ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Microalbuminuria</h3>
        <Input
          pdf={pdf}
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
