import { Input } from '../Input'

export default function SHBGGlobFijadora ({
  value,
  onChange,
  values,
  register
}) {
  return (
    <>
      <section>
        <h2>SHBG (Glob. Fijadora)</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='SHBG (Glob. Fijadora)....'
          name='shbg_glob_fijadora_simple'
        />
      </section>
    </>
  )
}
