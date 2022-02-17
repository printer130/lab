import { Input } from '../Input'

export default function HidatidosisElisa ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>Hidatidosis Elisa</h3>
        <Input
          pdf={pdf}
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
