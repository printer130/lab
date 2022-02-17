import { Input } from '../Input'

export default function SHBGGlobFijadora ({
  value,
  onChange,
  values,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>SHBG (Glob. Fijadora)</h3>
        <Input
          pdf={pdf}
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
