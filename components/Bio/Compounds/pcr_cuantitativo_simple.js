import { Input } from '../Input'

export default function PCRCuantitativo ({
  value,
  values,
  onChange,
  register
}) {
  return (
    <>
      <section>
        <h2>PCR Cuantitativo</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='PCR Cuantitativo....'
          name='pcr_cuantitativo_simple'
        />
      </section>
    </>
  )
}
