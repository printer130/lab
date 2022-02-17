import { Input } from '../Input'

export default function PCRCuantitativo ({
  value,
  values,
  onChange,
  register,
  pdf
}) {
  return (
    <>
      <section>
        <h3>PCR Cuantitativo</h3>
        <Input
          pdf={pdf}
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
