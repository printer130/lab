import { Input } from '../Input'

export default function TCoagulacion ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>T. Coagulacion</h3>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          placeholder='T. Coagulacion'
          name='t_coagulaci_n_simple'
        />
      </section>
    </>
  )
}
