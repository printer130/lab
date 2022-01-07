import { Input } from '../Input'

export default function TCoagulacion ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>T. Coagulacion</h2>
        <Input
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
