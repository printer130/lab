import { Input } from '../Input'

export default function HidatidosisElisa ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>Hidatidosis Elisa</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Hidatidosis Elisa....'
          name='hidatidosis_elisa_simple'
        />
      </section>
    </>
  )
}
