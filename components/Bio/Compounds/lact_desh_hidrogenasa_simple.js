import { Input } from '../Input'

export default function LactDeshHidrogenas ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Lact. Desh Hidrogenasa</h2>
        <Input
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
