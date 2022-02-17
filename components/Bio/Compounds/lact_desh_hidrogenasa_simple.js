import { Input } from '../Input'

export default function LactDeshHidrogenas ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Lact. Desh Hidrogenasa</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Lact. Desh Hidrogenasa....'
          name='lact_desh_hidrogenasa_simple'
        />
      </section>
    </>
  )
}
